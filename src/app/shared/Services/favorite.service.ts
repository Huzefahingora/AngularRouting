import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favoritesKey = 'favoriteCourses';
  
  constructor() { }

  addToFavorites(courseId: number): void {
    const favorites = this.getFavorites();
    if (!favorites.includes(courseId)) {
      favorites.push(courseId);
      localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
    }
  }

  removeFromFavorites(courseId: number): void {
    const favorites = this.getFavorites();
    const index = favorites.indexOf(courseId);
    if (index !== -1) {
      favorites.splice(index, 1);
      localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
    }
  }

  getFavorites(): number[] {
    const favoritesJson = localStorage.getItem(this.favoritesKey);
    return favoritesJson ? JSON.parse(favoritesJson) : [];
  }
}
