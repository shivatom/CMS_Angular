import { Router } from '@angular/router';
import { PostService } from './../../../../../../shared/services/post.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../../../environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImagePopupComponent } from '../../../../../../shared/components/image-popup/image-popup.component';
import { AlertComponent } from '../../../../../../shared/components/alert/alert.component';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {
  editing = {};
  selected = [];
  imgUrl=environment.imgUrl;
  columns = [
    { prop: 'title' },
    { name: 'Description' },
    { name: 'Image' }
  ];
  postList: Array<PostObject>;

  constructor(private modalService:NgbModal , private _service: PostService, private router: Router) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts(){
    this._service.get().subscribe(response => {
      this.postList = response as PostObject[];
    })
  }

  enlargeImage(value){
    const modalRef = this.modalService.open(ImagePopupComponent);
    modalRef.componentInstance.url = value;
  }
    
  onRowSelect(rowIndex){
    this.router.navigate(['admin/post/latest/update', rowIndex ] , { skipLocationChange:true})
  }

  deleteSection(rowIndex ,id ){
    const modalRef = this.modalService.open(AlertComponent);
    modalRef.componentInstance.type = 'danger';
    modalRef.componentInstance.title = 'Are you sure?';
    modalRef.componentInstance.description = 'You want to delete this post';

    modalRef.result.then((result) => {
      if(result){
        this._service.delete(id).subscribe(response=>{
          this.postList.splice(rowIndex,1);
          console.log(this.postList)
        })
      }
    }, (reason) => {
     // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

}

export class PostObject{
  id: any;
  title: any;
  description: any;
  image: any;
}


