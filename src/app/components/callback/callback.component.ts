/*
 * Copyright (c) 2018 Liam Ryan
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit, AfterViewChecked {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    const url = localStorage.getItem('destination');
    localStorage.removeItem('destination');
    if (url) {
      this.router.navigateByUrl(url);
    } else {
      this.router.navigate(['post/view']);
    }
  }
}
