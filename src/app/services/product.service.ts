import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models/product';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:23286/api/products/getall';

  constructor(private hhtpClient: HttpClient) {}

  getProducts():Observable<ListResponseModel<Product>> {
    return this.hhtpClient.get<ListResponseModel<Product>>(this.apiUrl);
  }
}
