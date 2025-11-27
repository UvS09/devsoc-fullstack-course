



import 'encapsulation.dart';

void main(){
  BankAccount account = BankAccount();
  account.deposit(500);
  print("Account balance: ${account.getBalance()}");
  //print(account._balance);      //Here this is an error
}