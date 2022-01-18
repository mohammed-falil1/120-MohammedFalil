var start =0;
var end=50;
arr=[];
for(i=start;i<=end;i++)
{
   arr.push(i);
}

for(i=start;i<=arr.length;i++)
{
    if(arr[i]%2==0)
    {
        console.log("even")
    }else
    {
        console.log("odd")
    }
}