let arrStock=[
  {
    id: 0,
    name: "product1",
    count: 3,
    price: 200,
  },
  {
    id: 1,
    name: "product2",
    count: 2,
    price: 150,
  },
  {
    id: 2,
    name: "product3",
    count: 5,
    price: 250,
  },
  {
    id: 3,
    name: "product4",
    count: 6,
    price: 100,
  }
];
let sum=0;
let arrBask=[
  {
    id: 0,
    name: "product1",
    count: 0,
    price: 200,
  },
  {
    id: 1,
    name: "product2",
    count: 0,
    price: 150,
  },
  {
    id: 2,
    name: "product3",
    count: 0,
    price: 250,
  },
  {
    id: 3,
    name: "product4",
    count: 0,
    price: 100,
  }
];
addTableS();
addTableB();

function addTableS()
{
  delTableS();
  let table=document.getElementById('tableStock');
 
  for (i=0; i<arrStock.length;i++)
  {
   var tr = document.createElement('tr');
   if (arrStock[i].count!=0)
   {
      let prdt= arrStock[i];
      for (let key in prdt)
      {
        var td = document.createElement('td');
        td.innerHTML='<td>'+prdt[key] +'</td>';
        tr.appendChild(td);
      }
      var td1 = document.createElement('td');
      td1.innerHTML='<input id="'+prdt.id +'" type="button" value="+">';
      td1.addEventListener('click', addProduct);
      tr.appendChild(td1);
      table.appendChild(tr);
    }
  }
}
function delTableS()
{
  let table=document.getElementById('tableStock');
  let tableRows = table.getElementsByTagName('tr');

  for  (i=tableRows.length-1; i>0; i--)
  {
    table.removeChild(tableRows[i]);
  }
}
function addTableB()
{
  delTableB();
  let table=document.getElementById('tableBasket');
 
  for (i=0; i<arrBask.length;i++)
  {
   var tr = document.createElement('tr');
   if (arrBask[i].count!=0)
   {
      let prdt= arrBask[i];
      for (let key in prdt)
      {
        var td = document.createElement('td');
        td.innerHTML='<td>'+prdt[key] +'</td>';
        tr.appendChild(td);
      }
      var td1 = document.createElement('td');
      td1.innerHTML='<input id="'+prdt.id +'" type="button" value="-">';
      td1.addEventListener('click', delProduct);
      tr.appendChild(td1);
      table.appendChild(tr);
    }
  }
}
function delTableB()
{
  let table=document.getElementById('tableBasket');
  let tableRows = table.getElementsByTagName('tr');

  for  (i=tableRows.length-1; i>0; i--)
  {
    table.removeChild(tableRows[i]);
  }
}
function addProduct(e)
{
  let i= e.target.getAttribute('id');
  arrBask[i].count=arrBask[i].count+1;
  arrStock[i].count=arrStock[i].count-1; 
  addTableS();
  addTableB();
  addSum(arrStock[i].price);
}
function delProduct(e)
{
  let i= e.target.getAttribute('id');
  arrBask[i].count=arrBask[i].count-1;
  arrStock[i].count=arrStock[i].count+1; 
  addTableS();
  addTableB();
  addSum(-arrStock[i].price);
}
function addSum(price)
{
  sum=sum+price;
  document.getElementById('sum').innerHTML='Сумма: '+sum+'';
}