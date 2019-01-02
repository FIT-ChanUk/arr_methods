import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let arr = [];


// ArrayLike 값으로 새로운 배열 생성  ++함수로 값 변환ok ++length 속성 가진 객체로 length 만큼
const arr_from = (() => {
  console.log('Array.from()');
  // arg type: ArrayLike
  // return type: 배열
  console.log(Array.from('foo'))
  console.log(Array.from(["a", "b", "c"], x => "hello " + x))
  console.log(Array.from([1, 2, 4], x => x + 10))
  console.log(Array.from({length: 5}, (v, i) => i))
  console.log(Array.from({length: ('Z'.charCodeAt(0)+1 - 'A'.charCodeAt(0)) / 1}, (_, i) => 'A'.charCodeAt(0) + i).map(x => String.fromCharCode(x)))
  console.log('************************************')
})();


// 배열 [| 값] 으로 새로운 배열 생성
const arr_of = (() => {
  console.log('Array.of()');
  // arg type: any
  // return type: 배열
  
  arr = [1,2,3]
  console.log(Array.of(7))
  console.log(Array.of([1,2,3]))
  console.log(Array.of(arr))
  //console.log("deep clone? " + (arr === Array.of(arr)) && "true")
  console.log(Array(7))
  console.log(Array('bb'))
  console.log(Array(1,2,3))
  console.log('************************************')
})()


// 배열과 배열[| 값]을 합친 새로운 배열 생성
const arr_concat = (() => {
  console.log('Array.prototype.concat()')
  // arg type: 배열 또는 값
  // return type: 배열

  arr = ['1', '2', '3']
  console.log(arr.concat(['a', 'b', 'c']))
  console.log(arr.concat('4', '5'))
  console.log(arr.concat(['a', 'b'], ['4', '5', '6'], ['c', 'd']))
  console.log(arr.concat('a', 'b', ['4', '5', '6'], ['c', 'd']))
  console.log('************************************')
})()

// 배열 내 값으로 부분적인 복사 붙여넣기
const arr_copyWithin = (() => {
  console.log('Array.prototype.copyWithin()')
  // arg type: 덮어쓸 시작위치, 복사할 시작위치, 복사할 마지막위치(인덱스+1)
  // return type: 배열

  arr = [1, 2, 3, 4, 5]
  console.log(arr.copyWithin(0, 3, 4))
  console.log(arr.copyWithin(1, 3))
  console.log(arr.copyWithin(0, -2))
  console.log('************************************')
})()


// 해당 배열값을 가진 iterator를 반환
const arr_entries = (() => {
  console.log('Array.prototype.entries()')
  // arg type: void
  // return type: IterableIterator

  arr = ['a', 'b', 'c']
  const iterator = arr.entries();
  console.log(iterator.next().value)
  console.log(iterator.next().value)
  console.log(iterator.next().value)
  console.log('************************************')
})()


// 배열의 모든 값이 함수의 조건을 통과하는지 체크
const arr_every = (() => {
  console.log('Array.prototype.every()')
  // arg type: function(value, index?, array?) => boolean
  // return type: boolean
  
  arr = [1, 30, 39, 29, 10 ,13];
  console.log(
    arr.every((arrVal) => {
      return arrVal < 30
    })
  )
  console.log(
    arr.every((arrVal, index, array) => index < 6)
  )
  console.log('************************************')
})()


// 배열의 특정 부분을 특정 값으로 채움
const arr_fill = (() => {
  console.log('Array.prototype.fill()')
  // arg type: 덮을 값, 시작위치, 끝위치(인덱스+1)
  // return type: 
  
  arr = [1, 2, 3, 4];
  console.log(arr.fill(0, 2, 4))
  console.log(arr.fill(5, 1))
  console.log(arr.fill(6))
  console.log(arr.fill(7, -3, -2))
  console.log(arr.fill(10, -3, -1))
  console.log(arr.fill(0, 1, NaN))
  console.log(Array(5).fill(1))
  console.log('************************************')
})()

// 조건에 맞는 값만 담은 배열 생성
const arr_filter = (() => {
  console.log('Array.prototype.filter()')
  // arg type: function(value, index?, array?)
  // return type: 배열 

  arr = ['apple', 'banana', 'mango', 'grape', 'kiwi']
  let result = arr.filter(val => val.length > 5);
  console.log(result);

  result = arr.filter((val, i, arr) => arr[i].length === 5)
  console.log(result);
  console.log('************************************')
})()


// 조건을 만족하는 첫 번째 값을 반환
const arr_find = (() => {
  console.log('Array.prototype.find()')
  // arg type: function(value, index?, array?) => boolean, thisArg? ++콜백 내에서 this로 사용될 값
  // return type: value 없으면 undifined

  arr = [5, 12, 8, 130, 44]
  let found = arr.find(element => element > 10)
  console.log(found);
  console.log('************************************')
})()


// 조건을 만족하는 첫 번째 인덱스 반환
const arr_findIndex = (() => {
  console.log('Array.prototype.findIndex()')
  // arg type: function(value, index?, array?) => boolean, thisArg? ++콜백 내에서 this로 사용될 값
  // return type: index 없으면 -1

  arr = [5, 12, 8, 130, 44]
  console.log(arr.findIndex((element) => element > 13))
  console.log('************************************')
})()


// 배열내 모든 배열을 지정된 깊이 까지 재귀적으로 이어붙임
const arr_flat = (() => {
  console.log('Array.prototype.flat()')
  // arg type: depth: number
  // return type: 배열
  
  arr = [1, 2, [3, 4]];
  console.log(arr.flat())
  arr = [1, 2, [3, 4], [5, 6]];
  console.log(arr.flat())
  arr = [1, 2, [3, 4, [5, 6]]];
  console.log(arr.flat())
  arr = [1, 2, [3, 4, [5, 6]]];
  console.log(arr.flat(2))
  arr = [1, 2, , , [4, 5]]
  console.log(arr.flat())
  console.log('************************************')
})()


// map 으로 가공된 값을 flat 하게 (depth = 1) 만든 값으로 배열 생성 
const arr_flatMap = (() => {
  console.log('Array.prototype.flatMap()')
  // arg type: function(value, index, array) => newValue, thisArg? ++콜백에서 this로 사용될 값
  // return type: 깊이 1인 배열

  arr = [1, 2, 3, 4]
  console.log(arr.map(x => [x * 2]));
  console.log(arr.flatMap(x => [x * 2]))
  console.log(arr.flatMap(x => [[x * 2]])) // 한 레벨만 flat 됨
  console.log('************************************')
})()


// 배열 요소마다 콜백 함수 실행
const arr_forEach = (() => {
  console.log('Array.prototype.forEach()')
  // arg type: function(value, index?, array?) => void, thisArg? ++콜백에서 사용될 this 의 값
  // return type: void

  arr = ['item1', 'item2', 'item3']
  const copy: any = [];
  arr.forEach((val) => {
    copy.push(val)
  })
  console.log(copy)
  
  arr = [1, 2, , 4]
  arr.forEach((val, index) => {
    console.log(`arr[${index}]`);
  })
  console.log('************************************')
})()


// 배열에 특정 요소가 포함되어있는지 검색
const arr_includes = (() => {
  console.log('Array.prototype.includes()');
  // arg type: 검색할 요소 값, 검색 시작 위치
  // return type: boolean

  arr = [1, 2, 3];
  console.log(arr.includes(2));

  arr = ['cat', 'dog', 'bat'];
  console.log(arr.includes('cat'));
  console.log(arr.includes('ca'));
  console.log(arr.includes('cat', 1));
  console.log('************************************');
})();


// 검색한 요소의 index 를 찾음
const arr_indexOf = (() => {
  console.log(' Array.prototype.indexOf()');
  // arg type: 검색할 value
  // return type: 해당 번째 index, 없으면 -1

  arr = ['ant', 'bison', 'camel', 'duck', 'bison'];
  console.log(arr.indexOf('bison'));
  console.log(arr.indexOf('bison', 2));
  console.log(arr.indexOf('ant', 2));
  console.log('************************************');
})();


// 배열을 구분자로 분리
const arr_join = (() => {
  console.log('Array.prototype.join()');
  // arg type: 구분자 ++default 는 ,
  // return type: joined String

  arr = ['Fire', 'Wind', 'Rain', , null, undefined ];
  console.log(arr.join());
  console.log(arr.join(''));
  console.log(arr.join('-'));
  console.log('************************************');
})();


// 배열의 인덱스를 키 값으로 가지는 iterator 생성
const arr_keys = (() => {
  console.log('Array.prototype.keys()');
  // arg type: none
  // return type: key 를 가진 iterator

  arr = [12, 453, 33];
  let iterator = arr.keys();

  // for(let key of iterator) {
  //   console.log(key)
  // }
  console.log('************************************');
})();


// 배열 전체를 검색해서 해당 요소를 찾은 마지막 인덱스를 get
const arr_lastIndexOf = (() => {
  console.log('Array.prototype.');
  // arg type: 찾을 요소, 거꾸로 검색 
  // return type: 

  arr = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
  console.log(arr.lastIndexOf('Dodo'));
  console.log(arr.lastIndexOf('Tiger'));

  arr = [2, 5, 9, 2, 2];
  console.log(arr.lastIndexOf(2));
  console.log(arr.lastIndexOf(2,3));
  console.log(arr.lastIndexOf(2,4));
  console.log(arr.lastIndexOf(2,-2));
  console.log('************************************');
})();


// 배열 요소만큼 함수를 반복하고 결과 요소를 새로운 배열에 담음
const arr_map = (() => {
  console.log('Array.prototype.map()');
  // arg type: function(value, index, array) => newArray, thisArg?
  // return type: 

  arr = [1, 4, 9, 16];
  console.log(arr.map(val => val * 2));
  console.log(arr);
  console.log('************************************');
})();


// 배열의 마지막 요소 제거
const arr_pop = (() => {
  console.log('Array.prototype.pop()')
  // arg type: none
  // return type: 제거한 요소 ++빈 배열 > undifined

  arr = ['dog', 'cat', 'tiger', 'duck'];
  console.log(arr.pop());
  console.log(arr);
  console.log(arr.pop());
  console.log(arr);
  console.log('************************************');
})();


// 배열의 끝에 해당 요소를 추가
const push = (() => {
  console.log('Array.prototype.push()');
  // arg type: 추가할 요소
  // return type: newIndexRange

  arr = ['dog', 'cat', 'tiger', 'duck'];
  console.log(arr.push('sheep'));
  console.log(arr);
  console.log(arr.push('dog', 'cat'));
  console.log(arr);
  console.log('************************************');
})();


// 배열의 각 요소를 사용한 반복함수를 실행시켜 단일 결과값을 얻어냄 ++실행순서: 왼쪽->오른쪽
const arr_reduce = (() => {
  console.log('Array.prototype.reduce()');
  // arg type: function(마지막결과값, 현재요소, 현재인덱스, array) => result 
  // return type: 최종 result

  arr = ['나', '다', '라', '마'];
  const reducer = (accumulator: any, currentValue: any) => accumulator + currentValue;

  console.log(arr.reduce(reducer));
  console.log(arr.reduce(reducer, '가'));

  arr = [0, 1, 2, 3];
  console.log(arr.reduce(reducer));
  console.log(arr.reduce(reducer, 4));
  console.log('************************************');
})();


// 배열의 각 요소를 사용한 반복함수를 실행시켜 단일 결과값을 얻어냄 ++실행순서: 오른쪽->왼쪽
const arr_reduceRight = (() => {
  console.log('Array.prototype.reduce()');
  // arg type: function(마지막결과값, 현재요소, 현재인덱스, array) => result 
  // return type: 최종 result

  arr = [['가', '나'], ['다'], ['라', '마']];
  const reducer = (accumulator: any, currentValue: any) => accumulator.concat(currentValue);
  console.log(arr.reduce(reducer));
  console.log('************************************');
})();


// 배열 순서를 뒤집음
const arr_reverse = (() => {
  console.log('Array.prototype.reverse()');
  // arg type: 
  // return type: 

  arr = ['one', 'two', 'three'];
  console.log('arr: ', arr);

  let reversed = arr.reverse();
  console.log('reversed: ', reversed);
  console.log('arr: ', arr);
  console.log('************************************');
})();


// 배열의 첫 번째 요소 제거
const arr_shift = (() => {
  console.log('Array.prototype.shift()');
  // arg type: none
  // return type: removed element

  arr = [1, 2, 3];
  console.log(arr);
  console.log(arr.shift());
  console.log('************************************');
})();


// 배열의 특정부분 잘라낸 배열 생성
const arr_slice = (() => {
  console.log('Array.prototype.slice()');
  // arg type: 시작지점(살릴 부분), 끝지점(살릴 부분)
  // return type: 배열

  arr = ['ant', 'bison', 'camel', 'duck', 'elephant'];
  console.log(arr.slice(2));
  console.log(arr);
  console.log(arr.slice(2, 4));
  console.log('************************************');
})();


// 배열의 각 요소를 검사하여 하나라도 조건에 만족하는지 검사
const arr_some = (() => {
  console.log('Array.prototype.some()');
  // arg type: function(현재 요소, 현재 인덱스, array) => boolean, thisArg? 
  // return type: boolean

  arr = ['슈프림', '스투시', '발렌시아가', '육스', '오프화이트'];
  const even = (element: string) => {
    return element === '슈프림';
  }
  console.log(arr.some(even));
  console.log('************************************');
})();


// 배열의 요소 정렬
const arr_sort = (() => {
  console.log('Array.prototype.sort()');
  // arg type: compare Function()
  // return type: sorted array

  arr = ['March', 'Jan', 'Feb', 'Dec', 'apr'];
  arr.sort();
  console.log(arr);

  //arr = ['4', '2', '5', '1', '3'];
  arr.sort((a: string, b: string) => {
    return a.localeCompare(b);
  });
  console.log(arr);
  arr.sort((a: string, b: string) => {
    if(a > b) return 1;
    else if(a < b) return -1;
    return 0;
  });
  console.log(arr);
  console.log('************************************');
})();


// 배열에 요소를 추가하고 제거
const arr_splice = (() => {
  console.log('Array.prototype.splice()');
  // arg type: 값이 추가 될 위치, 제거될 요소 수
  // return type: 제거된 요소들의 배열

  arr = ['Jan', 'March', 'April', 'June'];
  arr.splice(1, 0 ,'Feb');
  console.log(arr);
  arr.splice(2, 2 ,'구웃구웃');
  console.log(arr);
  console.log('************************************');
})();



const arr_toLocaleString = (() => {
  console.log('Array.prototype.toLocaleString()');
  // arg type: 
  // return type: 

  arr = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
  let localeString = arr.toLocaleString();
  console.log(localeString);
})();



//    Array.prototype.

class App extends Component {
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
