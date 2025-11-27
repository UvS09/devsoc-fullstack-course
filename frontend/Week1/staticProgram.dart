class Counter{
  static int totalCount = 0;

  Counter(){
    totalCount++;
  }

  static void showTotalCount(){
    print('Total Count: $totalCount');
  }
}

void main(){
  var c1 = Counter();
  var c2 = new Counter();

  Counter.showTotalCount();
}