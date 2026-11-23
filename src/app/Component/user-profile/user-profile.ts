import { Component } from '@angular/core';
import { signal } from '@angular/core';
@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  User =signal("Profil utilisateur")
  Name = signal("Oumaima")
  Email= signal ("Oumaima.zaghouani@esprit.tn")
}
