import { Injectable } from '@angular/core';
@Injectable()

export class TokenInfo {
  constructor() { }
  TokensJson = [{
    'MemberId': '222205',
    'Token': '8B-C98B12602557'
  },
  {
    'MemberId': '222204',
    'Token': '83-1CAEDAA9C34A'
  },
  {
    'MemberId': '222203',
    'Token': 'D6-0416658628CB'
  }
  ];
  provideToken = (memberId) => {
    let token;
    this.TokensJson.map((item) => {
      console.log(memberId == item.MemberId)
      if (memberId == item.MemberId) {
        token = item.Token
      }
    })
    return token
  }



}