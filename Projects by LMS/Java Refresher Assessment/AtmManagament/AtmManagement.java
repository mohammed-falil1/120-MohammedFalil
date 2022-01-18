import java.util.HashMap;
import java.util.InputMismatchException;
import java.util.Scanner;


public class AtmManagement implements Account{

    Scanner scan = new Scanner(System.in);
    String input;
    HashMap<Integer,AccountHolder> accountHolders = new HashMap<>();
    public static void main(String args[])
    {
        AccountHolder holder1=new AccountHolder
        (1001, "Mohammed", 21, "Chennai", "A21B3", 10000);
        AccountHolder holder2=new AccountHolder
        (2002, "Falil", 23, "Bangalore", "B34C5", 10000);
        AtmManagement atmManagement = new AtmManagement();
        atmManagement.accountHolders.put(holder1.getAccountNumber(), holder1);
        atmManagement.accountHolders.put(holder2.getAccountNumber(), holder2);
        atmManagement.menu();

    }

    void menu()
    {
        String input;
        while(true)
        {
            System.out.println("********************************");
            System.out.println("         Main Menu");
            System.out.println("********************************");
            System.out.println("A- Withdraw Money");
            System.out.println("B- Deposit Money");
            System.out.println("C- Show Balance");
            System.out.println("D- Show Statement");
            System.out.println("E- Exit ");
            System.out.println("Select an option from the above menu: ");
            input = scan.nextLine();
            switch(input)
            {
                case "A" : withdraw();
                            break;
                case "B" : deposit();
                            break;
                case "C" : balance();
                            break;
                case "D" : showStatement();
                            break;
                case "E" : System.exit(0);
                            break;
               
                default : System.out.println("Wrong input. Please try again later");
            }
        }

        
    }

    private void showStatement() {
        int accountNumber = checkAccountNumber();
        System.out.println("********************************");
        System.out.println("         Statement");
        System.out.println("********************************");
        if(accountNumber == 0)
        {
            System.out.println("Sorry no account found . please Try again later");
            return;
        }
        AccountHolder account = new AccountHolder(); 
        account = accountHolders.get(accountNumber);
        for(int i =0 ;i<account.getStatement().size();i++)
        {
            System.out.println(account.getStatement().get(i));
        }
    }

    private void balance() {
        int accountNumber = checkAccountNumber();
        System.out.println("********************************");
        System.out.println("         Balance");
        System.out.println("********************************");
        if(accountNumber == 0)
        {
            System.out.println("Sorry no account found . please Try again later");
            return;
        }
        AccountHolder account = new AccountHolder(); 
        account = accountHolders.get(accountNumber);
        System.out.println("Balance = "+account.getBalance());
        
    }

    @Override
    public int checkAccountNumber() {
        int accountNumber;
        int noAccountFound = 0;
        System.out.println("Enter the Account Number:  ");
        accountNumber = scan.nextInt();
        scan.nextLine();
        if(accountHolders.get(accountNumber) != null)
        {
            return accountNumber;
        }
        return noAccountFound;
    }

    @Override
    public void withdraw() {
        int amount =0;
        int accountNumber = checkAccountNumber();
        if(accountNumber == 0)
        {
            System.out.println("Sorry no account found . please Try again later");
            return;
        }
        AccountHolder account = new AccountHolder(); 
        account = accountHolders.get(accountNumber);
        System.out.println("********************************");
        System.out.println("         Withdraw");
        System.out.println("********************************");
        try{
            System.out.println("Enter the amount to be withdrawn: ");
            amount = scan.nextInt();
            scan.nextLine();
            if(amount < account.getBalance())
            {
                System.out.println("Current Balance : "+account.getBalance());
                account.setBalance(account.getBalance() - amount);
                account.appenStatement("Withdraw - "+String.valueOf(amount));
                System.out.println("Money withdrawn Sucessfuly");
                System.out.println("Current Balance : "+account.getBalance());
            }
        }catch(InputMismatchException e)
        {
            System.out.println("Amount should be numeric.");
            scan.nextLine();
        }
    }
        
    

    @Override
    public void deposit() {
        int amount;
        int accountNumber = checkAccountNumber();
        AccountHolder account = new AccountHolder(); 
        account = accountHolders.get(accountNumber);
        System.out.println("********************************");
        System.out.println("         Deposit");
        System.out.println("********************************");
        try{
            System.out.println("Enter the amount to be deposited: ");
            amount = scan.nextInt();
            scan.nextLine();
            account.setBalance(account.getBalance() + amount);
            account.appenStatement("Deposit -"+String.valueOf(amount));
            System.out.println("Money deposited Sucessfuly");
            System.out.println("Current Balance : "+account.getBalance());
        }catch(InputMismatchException e)
        {
            System.out.println("Amount should be numeric.");
            scan.nextLine();
        }

        
       
    }

  
    
}
