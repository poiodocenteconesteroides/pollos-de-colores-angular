import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart/cart.service';

@Component({
  standalone: true,
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule],
})
export class ProductsComponent implements OnInit {
  products = [
    { id: '1', name: 'Poio amarillo', price: 10, image: 'assets/img/amarillo.jpg' },
    { id: '2', name: 'Poio azul', price: 15, image: 'assets/img/azul.jpg' },
    { id: '3', name: 'Poio morado', price: 29, image: 'assets/img/morado.jpg' },
    { id: '4', name: 'Poio naranja', price: 27, image: 'assets/img/naranja.jpg' },
    { id: '5', name: 'Poio rojo', price: 22, image: 'assets/img/rojo.jpg' },
    { id: '6', name: 'Poio verde', price: 25, image: 'assets/img/verde.jpg' },
  ];

  constructor(private cartService: CartService) {}

  ngOnInit() {}

  addToCart(product: any) {
    this.cartService.addToCart(product).subscribe(() => {
      alert(`${product.name} ha sido agregado al carrito.`);
    });
  }
}
