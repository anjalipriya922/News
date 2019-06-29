import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class NewsApiService {
  
api_key = '3fef4a72d562425a95859899c05e4ee1';
language:String='en';
constructor(private http:HttpClient) { }
initSources(){
  return this.http.get('https://newsapi.org/v2/sources?language='+this.language+'&apiKey=' + this.api_key);
}
initArticles(){
 return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
}
getArticlesByID(source: String){
 return this.http.get('https://newsapi.org/v2/top-headlines?sources'+source+'&apiKey='+this.api_key);
}

getArticleByLanguage(language: String){
  console.log(language);
  this.language = language;

}
getArticlesByKeyword(keyword:String)
{
  return this.http.get('https://newsapi.org/v2/everything?q='+keyword+'&language=fr&apiKey='+this.api_key);
}


} 