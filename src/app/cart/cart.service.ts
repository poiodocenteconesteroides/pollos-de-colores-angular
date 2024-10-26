import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://localhost:3000/cart';
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadInitialCart();
  }

  private loadInitialCart() {
    this.getCart().subscribe((items) => {
      this.cartItemsSubject.next(items);
    });
  }

  getCart(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addToCart(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product).pipe(
      tap(() => {
        this.refreshCart();
      })
    );
  }

  removeFromCart(productId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${productId}`).pipe(
      tap(() => {
        this.refreshCart();
      })
    );
  }

  clearCart(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/clear`).pipe(
      tap(() => {
        this.cartItemsSubject.next([]);
      })
    );
  }

  private refreshCart() {
    this.getCart().subscribe((items) => {
      this.cartItemsSubject.next(items);
    });
  }
}
