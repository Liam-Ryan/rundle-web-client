/*
 * Copyright (c) 2018 Liam Ryan
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { PostCategories } from './post-category';

export interface Post {
  id: number;
  description: string;
  content: string;
  lastEditedDate: string;
  tags: string[];
  title: string;
  category: typeof PostCategories[number];
  isHidden: boolean;
}
