import java.util.ArrayList;
import java.util.List;

public class AccountHolder {
    
    private int accountNumber;
    private String name;
    private int age;
    private String address;
    private String panCardNumber;
    private int balance;
    private List<String> statement ;

    public AccountHolder()
    {
        
    }

    public AccountHolder(int accountNumber, String name, int age, String address, String panCardNumber,int balance)
    {
        this.accountNumber = accountNumber;
        this.name = name;
        this.age = age;
        this.address = address;
        this.panCardNumber = panCardNumber;
        this.balance = balance;
        statement = new ArrayList<>();
    }

    public void setAccountNumber(int accountNumber)
    {
        this.accountNumber = accountNumber;
    }

    public int getAccountNumber()
    {
        return accountNumber;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getName()
    {
        return name;
    }

    public void setAge(int age)
    {
        this.age = age;
    }

    public int getAge()
    {
        return age;
    }

    public void setAddress(String address)
    {
        this.address = address;
    }

    public String getAddress()
    {
        return address;
    }

    public void setPanCardNumber(String panCardNumber)
    {
        this.panCardNumber = panCardNumber;
    }

    public String getPanCardNumber()
    {
        return panCardNumber;
    }

    public void setBalance(int balance)
    {
        this.balance = balance;
    }

    public int getBalance()
    {
        return balance;
    }

    public void appenStatement(String stmt)
    {
        this.statement.add(stmt);
    }

    public List<String> getStatement()
    {
        return statement;
    }

}
