function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6maQuOjeiv5":
        Script1();
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
}

