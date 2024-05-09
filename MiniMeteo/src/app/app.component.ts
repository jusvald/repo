import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minimeteo';
  nome: any;
  paese: any;
  temp: any;
  clouds: any;
  desc: any;
  feelslike: any;
  apikey = '';
  loading = false;
  icon: any;

  constructor() {}

  ngOnInit() {}
  traduciDesc(desc: string): string {
    const traduzioni: {[key: string]: string} = {
        "clear sky": "cielo sereno",
        "few clouds": "poche nuvole",
        "scattered clouds": "nuvole sparse",
        "broken clouds": "nuvoloso",
        "overcast clouds": "nuvoloso",
        "mist": "nebbia",
        "smoke": "fumo",
        "haze": "foschia",
        "sand, dust whirls": "sabbia, vortici di polvere",
        "fog": "nebbia",
        "sand": "sabbia",
        "dust": "polvere",
        "volcanic ash": "cenere vulcanica",
        "squalls": "raffiche di vento",
        "tornado": "tornado",
        "light rain": "pioggia leggera",
        "moderate rain": "pioggia moderata",
        "heavy intensity rain": "pioggia intensa",
        "very heavy rain": "pioggia molto intensa",
        "extreme rain": "pioggia estrema",
        "freezing rain": "pioggia ghiacciata",
        "light intensity shower rain": "pioggia leggera intermittente",
        "shower rain": "pioggia intermittente",
        "heavy intensity shower rain": "pioggia intensa intermittente",
        "ragged shower rain": "pioggia intermittente irregolare",
        "light snow": "neve leggera",
        "snow": "neve",
        "heavy snow": "neve intensa",
        "sleet": "nevischio",
        "shower sleet": "pioggia mista a nevischio",
        "light rain and snow": "pioggia e neve leggere",
        "rain and snow": "pioggia e neve",
        "light shower snow": "neve leggera intermittente",
        "shower snow": "neve intermittente",
        "heavy shower snow": "neve intensa intermittente"
    };

    
    if (traduzioni.hasOwnProperty(desc)) {
        return traduzioni[desc];
    } else {
        return desc;
    }
}

  prendiMeteo(citta: any) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+citta+'&appid='+this.apikey+'60c08cb918438e418245a6d4ba83d492')
    .then(response => response.json())
    .then(data => {
    
      this.temp = (data['main']['temp'] - 273.15).toFixed(1) + '°C';
      this.nome = data['name'];
      this.paese = data['sys']['country'];
      this.desc = data['weather'][0]['description'];
      this.clouds = data['clouds']['all'] + '% ';
      this.feelslike = (data['main']['feels_like'] - 273.15).toFixed(1) + '°C';
      this.loading = true;
      this.icon =  "http://openweathermap.org/img/w/" +  data['weather'][0]['icon'] + ".png";
    });
}}

