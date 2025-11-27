





class BankAccount{
  //Private field(Starts with _ in Dart)
  double _balance = 0;

  //Public method to deposit money
  void deposit(double amount){
    if(amount > 0){
      _balance += amount;
    }
  }

  //Public method to check balance
  double getBalance(){
    return _balance;
  }
}

void main(){
  BankAccount account = BankAccount();
  account.deposit(500);
  print("Account balance: ${account.getBalance()}");
  print(account._balance);    //It will still print the output although it is private. In Dart, private scope is within the same file.
}