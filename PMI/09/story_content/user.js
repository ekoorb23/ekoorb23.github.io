function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5pMszW8RatW":
        Script1();
        break;
      case "6n1GYn3sBau":
        Script2();
        break;
  }
}

function Script1()
{
  var currentDate = new Date()
var month = ("0" + (currentDate.getMonth() + 1)).slice(-2)
var day = ("0" + currentDate.getDate()).slice(-2)
var year = currentDate.getFullYear()
var dateString=day + "/" + month + "/" + year
var player = GetPlayer();
player.SetVar("SystemDate",dateString);
player.SetVar("month",month);
player.SetVar("day",day);
player.SetVar("year",year);
var yesterdaysDate = new Date((new Date()).valueOf() - 1000*60*60*24);
var month2 = ("0" + (yesterdaysDate.getMonth() + 1)).slice(-2)
var day2 = ("0" + yesterdaysDate.getDate()).slice(-2)
var year2 = yesterdaysDate.getFullYear()
var dateString2=day2 + "/" + month2 + "/" + year2
var player2 = GetPlayer();
player.SetVar("Yesterday",dateString2);
player.SetVar("month",month2);
player.SetVar("day",day2);
player.SetVar("year",year2);
}

function Script2()
{
  var currentDate = new Date()
var month = ("0" + (currentDate.getMonth() + 1)).slice(-2)
var day = ("0" + currentDate.getDate()).slice(-2)
var year = currentDate.getFullYear()
var dateString=day + "/" + month + "/" + year
var player = GetPlayer();
player.SetVar("SystemDate",dateString);
player.SetVar("month",month);
player.SetVar("day",day);
player.SetVar("year",year);
var yesterdaysDate = new Date((new Date()).valueOf() - 1000*60*60*24);
var month2 = ("0" + (yesterdaysDate.getMonth() + 1)).slice(-2)
var day2 = ("0" + yesterdaysDate.getDate()).slice(-2)
var year2 = yesterdaysDate.getFullYear()
var dateString2=day2 + "/" + month2 + "/" + year2
var player2 = GetPlayer();
player.SetVar("Yesterday",dateString2);
player.SetVar("month",month2);
player.SetVar("day",day2);
player.SetVar("year",year2);
}

