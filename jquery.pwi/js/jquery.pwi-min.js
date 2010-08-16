/**
 * Picasa Webalbum Integration jQuery plugin
 * This library was inspired aon pwa by Dieter Raber
 * @name jquery.pwi.js
 * @author Jeroen Diderik - http://www.jdee.nl/
 * @revision 1.3.0
 * @date august 16, 2010
 * @copyright (c) 2010 Jeroen Diderik(www.jdee.nl)
 * @license Creative Commons Attribution-Share Alike 3.0 Netherlands License - http://creativecommons.org/licenses/by-sa/3.0/nl/
 * @Visit http://pwi.googlecode.com/ for more informations, duscussions etc about this library
 */
eval(function (p, a, c, k, e, d) { e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) { d[e(c)] = k[c] || e(c) } k = [function (e) { return d[e] } ]; e = function () { return '\\w+' }; c = 1 }; while (c--) { if (k[c]) { p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]) } } return p } ('(5($){9 20,1o={};$.1T.v=5(1o){9 $V,2={};1o=$.3B({},$.1T.v.3j,1o);20=3X;5 3e(){2=1o;21=1k 1I().3F();2.1F=21;$V=$("<3 1F=\'3J"+21+"\'/>").3M(20);$V.18(\'3K\');3n();f k}5 3n(){4(2.B===\'\'){3G(\'3R 3T 3r 3q 1D 3p 3s B.\'+\'\\n\'+\'3D 1l://v.3v.1m 22 3A 3O\');f}3w(2.1h){2c\'1R\':3m();1r;2c\'l\':W();1r;2c\'U\':W();1r;31:1Z();1r}}5 29($19){9 $z=1k 1I(3o($19)),$R=$z.2G();4($R<2S){$R+=2T}f(2.2P[($z.3k())]+" "+$z.2C()+", "+$R)}5 2u(s){f s.2l(/\\n/g,\'<1v />\\n\')}5 1z($19){9 $z=1k 1I(3o($19));$R=$z.2G();4($R<2S){$R+=2T}4($z=="3Z 1I"){f $19}C{f($z.2C()+"-"+($z.3k()+1)+"-"+$R+" "+$z.3x()+":"+($z.2p()<10?"0"+$z.2p():$z.2p()))}}5 O(j){9 $X,$d="",$c="",$2o=j.3C.1V,$2f=j.A$1F.$t;$c=2u(j.2w?j.2w.$t:"");4(2.2d){4(j.1B$2R.1B$2X){$d=1z(j.1B$2R.1B$2X.$t)}C 4(j.A$1j){$d=1z(j.A$1j.$t)}C{$d=1z(j.3t.$t)}$d+=" "}$d+=$c.2l(1k 3d("\'","g"),"\'");$X=$("<3 b=\'28\' Y=\'1i:"+(2.2m+1)+"3U;1U: 3S;\'/>");$X.7("<a 2r=\'"+$2o+"?23="+2.33+"\' 14=\'1b-"+2.B+"\' 1d=\'"+$d+"\'><3c 1V=\'"+$2o+"?23="+2.2m+"&3l="+2.3h+"\'/></a>");4(2.2y){4(2.2t&&2.2d){$c=$d}4($c>2.2h){$c=$c.3E(0,2.2h)}$X.1c("a").7("<1v/>"+$c)}4(13(2.1n)==="5"){9 2W=j;$X.H(\'L.v\',2W,2Q)}f $X}5 w(j){9 $15=$("<3/>"),i=0;9 $1g=0,$3Y="";i=2.1a*(2.D-1);$1g=j.8.E.P;1S(i<2.3a&&i<$1g&&i<(2.1a*2.D)){9 $2f=j.8.E[i].A$1Y.$t,$1E=29(j.8.E[i].A$1j.$t),$30=j.8.E[i].2x$3H.2x$3L[0].3V.2l(1k 3d("/3P-c/","g"),"/");4($.3Q($2f,2.w)>-1||2.w.P===0){$1e=$("<3 b=\'3u\'/>");9 3g=j.8.E[i];$1e.H(\'L.v\',3g,5(e){e.G();2.r=1;2.l=e.I.A$1Y.$t;4(13(2.1q)==="5"){2.1q(e);f k}C{W();f k}});4(2.2A){$1e.7("<3c 1V=\'"+$30+"?23="+2.32+"&3l="+2.2Z+"\'/>")}4(2.2B){$1e.7("<1v/>"+j.8.E[i].1d.$t+"<1v/>"+(2.2k?$1E:"")+(2.2Y?"    "+j.8.E[i].A$3N.$t+" "+2.F.1K:""))}$15.7($1e)}i++}$15.7("<3 Y=\'1p: N;1i:1x;\'/>");4($1g>2.1a){9 $11=($1g/2.1a);9 $12=$("<3 b=\'2N\'/>").1A(2.F.2g),$16=$("<3 b=\'2O\'/>").1A(2.F.2n);$h=$("<3 b=\'2L\'/>");4(2.D>1){$12.18(\'1N\').H(\'L.v\',5(e){e.G();2.D=(1L(2.D,10)-1);w(j);f k})}$h.7($12);22(9 p=1;p<$11+1;p++){4(p==2.D){K="<3 b=\'2J\'>"+p+"</3> "}C{K=$("<3 b=\'2K\'>"+p+"</3>").H(\'L.v\',p,5(e){e.G();2.D=e.I;w(j);f k})}$h.7(K)}4(2.D<$11){$16.18(\'1N\').H(\'L.v\',5(e){e.G();2.D=(1L(2.D,10)+1);w(j);f k})}$h.7($16);$h.7("<3 Y=\'1p: N;1i:1x;\'/>");4($h.P>0&&(2.J===\'N\'||2.J===\'2U\')){$15.7($h)}4($h.P>0&&(2.J===\'N\'||2.J===\'2i\')){$15.3I($h.2H(m))}}2.1G=j;S(k,$15)}5 l(j){9 $o,$T,K="",$17=j.8.3W$40.$t,$1D="",$h="",$1P=j.8.A$2M===1C?"":j.8.A$2M.$t,$2s=j.8.2I===1C?"":j.8.2I.$t,$1E=29(j.8.A$1j===1C?\'\':j.8.A$1j.$t),$2D=($17=="1")?k:m;$1D=(j.8.1d==="1C"||2.2q.P>0)?2.2q:j.8.1d.$t;$o=$("<3/>");4(2.1h!=\'l\'&&2.1h!=\'U\'){K=$("<3 b=\'3z\'>"+2.F.w+"</3>").H(\'L.v\',5(e){e.G();1Z();f k});$o.7(K)}4(2.2F){$T=$("<3 b=\'3y\'/>");$T.7("<3 b=\'1d\'>"+$1D+"</3>");$T.7("<3 b=\'4c\'>"+$17+" "+($2D?2.F.1K:2.F.O)+(2.2k?", "+$1E:"")+(2.2E&&$1P?", "+$1P:"")+"</3>");$T.7("<3 b=\'4X\'>"+$2s+"</3>");4(2.2z){4(2.1h===\'U\'){}C{$T.7("<3><a 2r=\'1l://1u.1t.1m/"+2.B+"/"+j.8.A$1Y.$t+""+((2.Z!=="")?"?1X="+2.Z:"")+"#1M/"+j.8.E[0].A$1F.$t+"\' 14=\'4R[]\' 4K=\'4J\' b=\'4G\'>"+2.F.1M+"</a></3>")}}$o.7($T)}4($17>2.Q){$11=($17/2.Q);9 $12=$("<3 b=\'2N\'/>").1A(2.F.2g),$16=$("<3 b=\'2O\'/>").1A(2.F.2n);$h=$("<3 b=\'2L\'/>");4(2.r>1){$12.18(\'1N\').H(\'L.v\',5(e){e.G();2.r=(1L(2.r,10)-1);W();f k})}$h.7($12);22(9 p=1;p<$11+1;p++){4(p==2.r){K="<3 b=\'2J\'>"+p+"</3> "}C{K=$("<3 b=\'2K\'>"+p+"</3>").H(\'L.v\',p,5(e){e.G();2.r=e.I;W();f k})}$h.7(K)}4(2.r<$11){$16.18(\'1N\').H(\'L.v\',5(e){e.G();2.r=(1L(2.r,10)+1);W();f k})}$h.7($16);$h.7("<3 Y=\'1p: N;1i:1x;\'/>")}4($h.P>0&&(2.J===\'N\'||2.J===\'2U\')){$o.7($h)}9 i=((2.r-1)*2.Q);1S(i<(2.Q*2.r)&&i<$17){9 $1y=O(j.8.E[i]);$o.7($1y);i++}4($h.P>0&&(2.J===\'N\'||2.J===\'2i\')){$o.7($h.2H(m))}2.1H[2.l]=j;9 $s=$(".28",$o).24(2.2j);4(13(2.1f)==="5"){2.1f($s.1c("a[14=\'1b-"+2.B+"\']"))}C 4(13(2.1n)!="5"&&$.1w){$s.1c("a[14=\'1b-"+2.B+"\']").1w(2.2e)}S(k,$o)}5 1R(j){9 $o=$("<3/>"),$2v=j.8?j.8.E.P:0,i=0;1S(i<2.Q&&i<$2v){9 $1y=O(j.8.E[i]);$o.7($1y);i++}$o.7("<3 Y=\'1p: N;1i:1x;\'> </3>");9 $s=$("3.28",$o).24(2.2j);4(13(2.1f)==="5"){2.1f($s.1c("a[14=\'1b-"+2.B+"\']"))}C 4(13(2.1n)!="5"&&$.1w){$s.1c("a[14=\'1b-"+2.B+"\']").1w(2.2e)}S(k,$o)}5 4N(M){M.G();M.3i();2.1q(M)}5 2Q(M){M.G();M.3i();2.1n(M)}5 1Z(){4(2.1G.8){w(2.1G)}C{S(m,\'\');9 $u=\'1l://1u.1t.1m/I/8/26/25/\'+2.B+\'?2a=l&4O=\'+2.34+\'&1O=1Q\';$.1W($u,\'2b=?\',w)}f $V}5 W(){4(2.1H[2.l]){l(2.1H[2.l])}C{9 $41=((2.r-1)*2.Q)+1;9 $u=\'1l://1u.1t.1m/I/8/26/25/\'+2.B+\'/l/\'+2.l+\'?2a=O&1O=1Q\'+((2.Z!=="")?"&1X="+2.Z:"")+((2.U!=="")?"&38="+2.U:"");S(m,\'\');$.1W($u,\'2b=?\',l)}f $V}5 3m(){S(m,\'\');9 $u=\'1l://1u.1t.1m/I/8/26/25/\'+2.B+(2.l!==""?\'/l/\'+2.l:\'\')+\'?2a=O&4Q-4M=\'+2.Q+\'&1O=1Q&q=\'+((2.Z!=="")?"&1X="+2.Z:"")+((2.U!=="")?"&38="+2.U:"");$.1W($u,\'2b=?\',1R);f $V}5 S(1J,I){4(1J){36.3b.Y.1U="4H"}C{36.3b.Y.1U="31";$V.X(I)}}3e()};$.1T.v.3j={1h:\'w\',B:\'\',l:"",Z:"",w:[],2Z:1,2q:"",32:4I,3a:35,1a:35,D:1,34:"4S",r:1,33:4U,Q:50,J:\'2i\',2m:52,3h:0,2j:{\'53\':\'54\'},1n:"",1q:"",1f:"",2B:m,2A:m,2k:m,2Y:m,2F:m,2E:m,2z:m,2y:k,2t:k,2h:51,4T:k,2d:m,F:{O:"O",1K:"1K",w:"4V 4W w",1M:"4Y 1M",1J:"4Z 4L I...",r:"4E",2g:"4e",2n:"4d",4F:"|"},2P:["4f","4g","4j","4i","4h","4b","4a","44","43","42","45","46"],2e:{49:k,48:0.6,47:1s,4k:1s,4l:"4y",4x:3f,4w:3f,4z:1s,4A:1s,4D:"{x}/{y}",4C:[27,4B,4v,4u],4o:[37,4n],4m:[39,4p]},4q:{4t:"<3 b=\'4s 2V\'>1J...</3>",24:"2V"},1G:{},1H:{},4r:""}})(4P);', 62, 315, '||settings|div|if|function||append|feed|var||class||||return||navRow|||false|album|true||scPhotos|||page||||pwi|albums|||today|gphoto|username|else|albumPage|entry|labels|stopPropagation|bind|data|showPager|tmp|click|event|both|photo|length|maxResults|year|show|scPhotosDesc|keyword|self|getAlbum|html|style|authKey||pageCount|ppage|typeof|rel|scAlbums|npage|np|addClass|dt|albumsPerPage|lb|find|title|scAlbum|popupExt|na|mode|height|timestamp|new|http|com|onclickThumb|opts|clear|onclickAlbumThumb|break|400|google|picasaweb|br|slimbox|0px|scPhoto|formatDateTime|text|exif|undefined|at|album_date|id|albumstore|photostore|Date|loading|photos|parseInt|slideshow|link|alt|loc|json|latest|while|fn|cursor|src|getJSON|authkey|name|getAlbums|elem|ts|for|imgmax|css|user|api||pwi_photo|formatDate|kind|callback|case|showPhotoDate|slimbox_config|id_base|prev|showCaptionLength|bottom|thumbCss|showAlbumdate|replace|thumbSize|next|img_base|getUTCMinutes|albumTitle|href|ad|showPhotoCaptionDate|nl2br|len|summary|media|showPhotoCaption|showSlideshowLink|showAlbumThumbs|showAlbumTitles|getUTCDate|item_plural|showAlbumLocation|showAlbumDescription|getUTCFullYear|clone|subtitle|pwi_pager_current|pwi_pager_page|pwi_pager|location|pwi_prevpage|pwi_nextpage|months|clickThumb|tags|1000|1900|top|pwi_loader|obj|time|showAlbumPhotoCount|albumCrop|thumb|default|albumThumbSize|photoSize|albumTypes|999|document||tag||albumMaxResults|body|img|RegExp|_initialize|250|jfeed|thumbCrop|preventDefault|defaults|getUTCMonth|crop|getLatest|_start|Number|least|specify|you|your|published|pwi_album|googlecode|switch|getUTCHours|pwi_album_description|pwi_album_backlink|more|extend|content|See|substring|getTime|alert|group|prepend|pwi_|pwi_container|thumbnail|appendTo|numphotos|info|s160|inArray|Make|pointer|sure|px|url|openSearch|this|navrow|Invalid|totalResults|si|October|September|August|November|December|overlayFadeDuration|overlayOpacity|loop|July|June|details|Next|Previous|January|February|May|April|March|resizeDuration|resizeEasing|nextKeys|80|prevKeys|83|blockUIConfig|token|lbLoading|message|70|67|initlaHeight|initialWidth|swing|imageFadeDuration|captionAnimationDuration|88|closeKeys|counterText|Page|devider|sslink|wait|160|_new|target|fetching|results|clickAlbumThumb|access|jQuery|max|gb_page_fs|public|showPhotoDownload|800|Back|to|description|Display|PWI||9999|72|margin|5px'.split('|'), 0, {}))