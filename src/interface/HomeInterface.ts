// 코인 리스트 api 인터페이스

export interface CoinItfc {
    id : string;
    name : string;
    symbol : string;
    rank : number;
    is_new : boolean;
    is_active : boolean;
    type : string;
  }
  