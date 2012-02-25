/*
 * dorimusic.js
 * 
 * Created by FUKUBAYASHI Yuichiro on 2012/02/25
 * Copyright (c) 2012, FUKUBAYASHI Yuichiro
 *
 * last update: <2012/02/25 20:54:26>
 */
DORIMUSIC = {      
  table : [
    ['ドu8','++++++ds------'],
    ['シ8','+++++ds-----'],
    ['ラ8','+++ds---'],
    ['ソ8','++ds--'],
    ['ファ8','+ds-'],
    ['ミ8','ds'],
    ['レ8','-ds+'],
    ['ド8','--ds++'],

    ['ドu','++++++dss------'],
    ['シ','+++++dss-----'],
    ['ラ','+++dss---'],
    ['ソ','++dss--'],
    ['ファ','+dss-'],
    ['ミ','dss'],
    ['レ','-dss+'],
    ['ド','--ds++'],
    
    ['休','s']
  ],

  replace_code : function(text,d) {
    var result = text, base=d;

    if(base != 'ド' && base != 'リ' && base != 'ラ' && base != 'ン' && base != 'ド'){
      base = 'ド';
    }

    for(var i=0;i<this.table.length;i++){
      result = result.replace(new RegExp(this.table[i][0],'g'),this.table[i][1]);
    }

    result = result.replace(/d/g,base);
    result = result.replace(/s/g,'ッ');

    while(result.indexOf("+-") > -1){
      result = result.replace("+-","");          
    }
    while(result.indexOf("-+") > -1){
      result = result.replace("-+","");          
    }
    
    return result;
  }
};

