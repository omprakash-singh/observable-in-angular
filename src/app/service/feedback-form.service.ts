import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore'
import { collection, addDoc } from "firebase/firestore";
import { from } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FeedbackFormService {

  constructor(
    private db: Firestore
  ) { }

  saveFeedbackData(data: any) {
    return from(addDoc(collection(this.db, "Feedback"), data))
  }
}
