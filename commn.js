threaded_comments //Global setting
        Config.maxThreadDepth = 5;//How threaded level that you want
        Display_Emo = true;//Display emoticon or not? set "false" to no display
        Replace_Youtube_Link = true;//Auto replace youtube link to iframe embedded, choose "false" to disable
        Replace_Image_Link = true;//Auto replace an image link  choose "false" to disable.
                                Replace_Force_Tag = true;//Auto replace an virtual tag example: [pre] to <pre>, and [/pre] </pre>, If user input wrong , your layout will be gone. Then becare ful when enable this trap
        Replace_Image_Ext = ['JPG', 'GIF', 'PNG', 'BMP'];//(support: jpg, gif, png, bmp),only effect when Replace_Image_Link=true
        
        //Config emoticons declare
Emo_List = [
':)'  	,'https://lh3.googleusercontent.com/-cQugl5FMRuM/V1U_XbfQigI/AAAAAAAAEAU/_5Q9Hv4xAGo7Z_TUaGMyoch8vEPO1KnYgCLcB/h120/1.png',
':('  	,'https://lh3.googleusercontent.com/-nQpusekLOCY/V1U_XmFH4LI/AAAAAAAAEAY/TXKngRHW9go5Qrh9wkZR5QFCAEPPvVeeACLcB/h120/2.png',
'hihi'  ,'https://lh3.googleusercontent.com/-RqDpqWecyMw/V1U_j-B12EI/AAAAAAAAECc/s7jdJHYiDQogwTJGmkwO7H4m2JR5qvB6ACLcB/h120/3.png',
':-)'  	,'https://lh3.googleusercontent.com/-LWEIDBVvX1c/V1U_lnGQezI/AAAAAAAAEC8/rjH9OARs2xEp48_v9Q4KaaBvwo6YMZ-ggCLcB/h120/4.png',
':D'  	,'https://lh3.googleusercontent.com/-XxQdOt_KU0Q/V1U_mKKhA8I/AAAAAAAAEDA/bvjgNnnHctg9ueVNu5NFxQ18wQh-hqykACLcB/h120/5.png',
'=D'  	,'https://lh3.googleusercontent.com/-ecwUs8Iv7cE/V1U_maDI_uI/AAAAAAAAEDE/3VBplucPP9g3HRA-zyr_fwWPwlXpC9z9ACLcB/h120/6.png',
':-d'  	,'https://lh3.googleusercontent.com/-cPixj9X9VU4/V1U_mRajeVI/AAAAAAAAEDI/rLjaySYljNY7ldS5KBJYinqcz5JsQwLKACLcB/h120/7.png',
';('  	,'https://lh3.googleusercontent.com/-QK49_cxX7Pg/V1U_m0Plu0I/AAAAAAAAEDQ/QgU1OQfknsgiV1o9rHPZHByL2eeVNxCTgCLcB/h120/8.png',
';-('  	,'https://lh3.googleusercontent.com/-OIvn-XD877c/V1U_m0TggsI/AAAAAAAAEDU/dfIUcK-mvzwcuBYgE93WdXp8nUiaax-kwCLcB/h120/9.png',
'@-)'   ,'https://lh3.googleusercontent.com/-5-xZ_iOFEWY/V1U_fgPr1qI/AAAAAAAAEAk/Fzil_Zga404bKRMUWBJcrYCdZG9WMoqwQCLcB/h120/10.png',
':P'  	,'https://lh3.googleusercontent.com/-surwmy1xv7s/V1U_flVlhoI/AAAAAAAAEAs/UumewMQHQvQ0fF259J1pZPksuGkjt77UwCLcB/h120/11.png',
':o'	,'https://lh3.googleusercontent.com/-TbaqYWjix1Q/V1U_frVlWjI/AAAAAAAAEAo/blK4C7ldC6Me0rdC9yeC3UAs8L-K-oKSACLcB/h120/12.png',     
'-_-'   ,'https://lh3.googleusercontent.com/-MXeJVgDtvm8/V1U_gT-pwFI/AAAAAAAAEA4/VHEw8D0J-igAMmlHQEo8-H0LofhPblsyACLcB/h120/13.png',     
'(o)'	,'https://lh3.googleusercontent.com/-Qh8qpbpfn5w/V1U_gd8Y37I/AAAAAAAAEA0/jrmxtwDbWkAo6OMc1dp81LJ_4rxq6QgEACLcB/h120/14.png',     
'[-('	,'https://lh3.googleusercontent.com/-ydJg3pGdAu4/V1U_glYAGYI/AAAAAAAAEA8/9Bmt6TkY6qAev2PW-upGFKyfTM_neZ33ACLcB/h120/15.png',     
':-?'	,'https://lh3.googleusercontent.com/-zvAWzR1cFqg/V1U_gwtpBEI/AAAAAAAAEBA/UwYwxwcPyRolYybeo2HM432aDEmoS7WKgCLcB/h120/16.png', 
'(p)'	,'https://lh3.googleusercontent.com/-P7z88ESwPbA/V1U_hOh1WhI/AAAAAAAAEBI/dIDLP1WItxQSmbJhxhpx0XmJ_HyzojQ7wCLcB/h120/17.png', 
':-s'	,'https://lh3.googleusercontent.com/-TPpiEOnXnIY/V1U_hPHCZ0I/AAAAAAAAEBM/bdDzJnYqQlIjRTVaGpq31n95sZmbRKRIQCLcB/h120/18.png',
'(m)'	,'https://lh3.googleusercontent.com/-6FrkT1JkhoI/V1U_hiPQnGI/AAAAAAAAEBY/BSr_6-K4NlwX1xfLljfIbFgx6ly7rJOvwCLcB/h120/19.png',
'8-)'	,'https://lh3.googleusercontent.com/-7C1sLx9TYkg/V1U_hty1WFI/AAAAAAAAEBg/Hs27CyEGkLEWoT3N8wCBWo22PE5VuPwZQCLcB/h120/20.png',
':-t'	,'https://lh3.googleusercontent.com/-_FUqFhidqMA/V1U_h6O-u1I/AAAAAAAAEBc/57ERp1X4nYcIpGHJwdLCLpJidR-CqURGACLcB/h120/21.png',
':-b'	,'https://lh3.googleusercontent.com/-mvLRhY4f4Hg/V1U_iQ6ZUiI/AAAAAAAAEBo/sy2V-sOyFoQylKRQuZHxymrzTibYlNoLQCLcB/h120/22.png',
'b-('	,'https://lh3.googleusercontent.com/-xG1jATeYafQ/V1U_iY3K2rI/AAAAAAAAEBw/9siA8z5H7e0jv28K2d7Z3DpOn1Ioks9-gCLcB/h120/23.png',
':-#'	,'https://lh3.googleusercontent.com/-HICGf3jYH1Q/V1U_iTpgnOI/AAAAAAAAEBs/OTQXucr4SwQtYQ43-FJSQUA70V-HRcnkgCLcB/h120/24.png',
'=p~'	,'https://lh3.googleusercontent.com/-rFE8c9kChSA/V1U_jAuFzwI/AAAAAAAAEB8/Uei-eeRYucsaX_b25oSUFSjeOr6AbK1wgCLcB/h120/25.png',
'$-)'	,'https://lh3.googleusercontent.com/-Pzi_NyZB0CM/V1U_jCqzB-I/AAAAAAAAECA/86MgOeR0kGoylHserWnLU4-wEpro2oGmgCLcB/h120/26.png',
'(y)'	,'https://lh3.googleusercontent.com/-DOR5NAJ7fag/V1U_jLkDwhI/AAAAAAAAECE/elfZGm0x7FoChkEsbK_UMuxvyO2dx2gpwCLcB/h120/27.png',
'x-)'	,'https://lh3.googleusercontent.com/-AvfZd1NTFfw/V1U_j0YjR7I/AAAAAAAAECU/Fm1730hyNxAHjX7U85ht6IpHoKQ6kZOpwCLcB/h120/29.png',
'(k)'	,'https://lh3.googleusercontent.com/-Sf533Lx2XDo/V1U_khMZ9eI/AAAAAAAAECg/WOgTOgQB3D4RSYHCj9hfLrlOURjA3XEawCLcB/h120/30.png',
'(h)'	,'https://lh3.googleusercontent.com/--Rzg7PE7FYQ/V1U_kpnrH0I/AAAAAAAAECo/XrBlEvaRaawUxgC-i_UC0uQf_0EEGwlfgCLcB/h120/31.png',
'(c)'	,'https://lh3.googleusercontent.com/-q3xJUc8AM8Q/V1U_kniub3I/AAAAAAAAECk/qcB2jKeUbIAT0JxcC94SnPGcPMrUzrIMQCLcB/h120/32.png',
'cheer'	,'https://lh3.googleusercontent.com/-Di2zHgE4USM/V1U_lBsZvUI/AAAAAAAAEC4/1jGglPj2FhIuP2ugYy173q9evtzd-NWdACLcB/h120/33.png',
'(li)'	,'https://lh3.googleusercontent.com/-tg98vYaNbAM/V1U_lK3-GEI/AAAAAAAAECw/GSik9JCoRjwX5SRbCeYtkOOjguRN_j6lgCLcB/h120/34.png',
'(pl)'	,'https://lh3.googleusercontent.com/-xyfPNlEkU8s/V1U_lWd8aMI/AAAAAAAAEC0/ZSjoYA3rTY4DhfflmKYRm__fz6UejeePwCLcB/h120/35.png',
];
        
                               
                                //Config Force tag list, define all in lower case
                                Force_Tag = [
                                    '[pre]','<pre>',
                                    '[/pre]','</pre>',
                                    '<pre class="brush: plain; title: ; notranslate" title="">','&lt;code&gt;',
                                    '</pre>','</code>'
                                ];
      
var Cur_Cform_Hdr='.threaded_comments';
var Cur_Cform_Url=$('#comment-editor').attr('src');
function trim(str)
	{
	var whitespace=' \n\r\t\f\x5b\x5d\x7c\x7d\x3c\x3e\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
	for(var i=0;
	i<str.length;
	i++)
		{
		if(whitespace.indexOf(str.charAt(i))!=-1)
			{
			str=str.substring(0,i);
			break
		}
	}
	return str
}
$('#comment_block .comment_body p').html(function(index,oldhtml)
	{
	if(Replace_Youtube_Link)
		{
		var search_key='https://www.youtube.com/watch?v=';
		var check_index=oldhtml.indexOf(search_key);
		while(check_index!=-1)
			{
			ht=oldhtml.substring(check_index);
			yt_link=trim(ht);
			var yt_code_index=yt_link.indexOf('&');
			var yt_code='';
			if(yt_code_index==-1)
				{
				yt_code=yt_link.substring(search_key.length)
			}
			else
				{
				yt_code=yt_link.substring(search_key.length,yt_code_index)
			}
			var yt_video='<iframe class="comment_youtube" src="https://www.youtube.com/embed/'+yt_code+'?autohide=1" frameborder="0" allowfullscreen></iframe>';
			oldhtml=oldhtml.substring(0,check_index)+yt_video+oldhtml.substring(check_index+yt_link.length);
			check_index=oldhtml.indexOf(search_key);
			if(check_index==-1)
				{
				search_key='https://www.youtube.com/watch?v=';
				check_index=oldhtml.indexOf(search_key)
			}
		}
	}
	if(Replace_Image_Link)
		{
		var save_html='';
		var temp_html=oldhtml;
		for(var i=0;
		i<Replace_Image_Ext.length;
		i++)
			{
			var search_key='.'+Replace_Image_Ext[i];
			var upper_html=temp_html.toUpperCase();
			var check_index=upper_html.indexOf(search_key);
			while(check_index!=-1)
				{
				img_src=temp_html.substring(0,check_index+search_key.length);
				upper_html=img_src.toUpperCase();
				var http_search='https://';
				var find_http=upper_html.indexOf(http_search);
				var save_http='';
				while(find_http!=-1)
					{
					save_http=http_search.toLowerCase();
					img_src=img_src.substring(find_http+http_search.length);
					upper_html=img_src.toUpperCase();
					find_http=upper_html.indexOf(http_search)
				}
				http_search='HTTPS://';
				upper_html=img_src.toUpperCase();
				find_http=upper_html.indexOf(http_search);
				while(find_http!=-1)
					{
					save_http=http_search.toLowerCase();
					img_src=img_src.substring(find_http+http_search.length);
					upper_html=img_src.toUpperCase();
					find_http=upper_html.indexOf(http_search)
				}
				if(save_http==''||img_src.length<6)
					{
					break
				}
				img_src=save_http+img_src;
				save_html+=temp_html.substring(0,check_index+search_key.length-img_src.length)+'<img src="'+img_src+'" class="comment_img"/>';
				temp_html=temp_html.substring(check_index+search_key.length);
				upper_html=temp_html.toUpperCase();
				check_index=upper_html.indexOf(search_key)
			}
		}
		oldhtml=save_html+temp_html
	}
	if(Display_Emo)
		{
		var length=Emo_List.length;
		if(length%2==1)
			{
			length--
		}
		for(var i=0;
		i<length;
		i+=2)
			{
			var img_html='<img src="'+Emo_List[i+1]+'" class="comment_emo"/>';
			check_index=oldhtml.indexOf(Emo_List[i]);
			while(check_index!=-1)
				{
				oldhtml=oldhtml.substring(0,check_index)+img_html+oldhtml.substring(check_index+Emo_List[i].length);
				check_index=oldhtml.indexOf(Emo_List[i])
			}
		}
	}
	if(Replace_Force_Tag)
		{
		var length=Force_Tag.length;
		if(length%2==1)
			{
			length--
		}
		for(var i=0;
		i<length;
		i+=2)
			{
			while(1)
				{
				var temp_html=oldhtml.toLowerCase();
				check_index=temp_html.indexOf(Force_Tag[i]);
				if(check_index!=-1)
					{
					oldhtml=oldhtml.substring(0,check_index)+Force_Tag[i+1]+oldhtml.substring(check_index+Force_Tag[i].length)
				}
				else
					{
					break
				}
			}
		}
	}
	return oldhtml
}
);
$('.google_emo').html(function(index,oldhtml)
	{
	if(Display_Emo)
		{
		var length=Emo_List.length;
		if(length%2==1)
			{
			length--
		}
		var newhtml='';
		for(var i=0;
		i<length;
		i+=2)
			{
			var img_code='<span>'+Emo_List[i]+'</span>';
			var img_html='<img src="'+Emo_List[i+1]+'" class="comment_emo"/>';
			newhtml+='<div class="item">'+img_html+img_code+'</div>'
		}
		return newhtml
	}
}
);
$('.comment_wrap .comment_body p').html(function(i,h)
	{
	temp=h.toLowerCase();
	index=temp.indexOf('@<a href="#c');
	if(index!=-1)
		{
		index_tail=temp.indexOf('</a>',index);
		if(index_tail!=-1)
			{
			h=h.substring(0,index)+h.substring(index_tail+4)
		}
	}
	return h
}
);
function Valid_Par_Id(par_id)
	{
	r=par_id.indexOf('c');
	if(r!=-1)par_id=par_id.substring(r+1);
	return par_id
}
function Cform_Ins_ParID(par_id)
	{
	par_id='&parentID='+par_id+'#%7B';
	n_cform_url=Cur_Cform_Url.replace(/#%7B/,par_id);
	return n_cform_url
}
function Reset_Comment_Form()
	{
	html=$(Cur_Cform_Hdr).html();
	$(Cur_Cform_Hdr).html('');
	Cur_Cform_Hdr='.threaded_comments';
	$(Cur_Cform_Hdr).html(html);
	$('#comment-editor').attr('src',Cur_Cform_Url)
}
function Display_Reply_Form(e)
	{
	par_id=$(e).attr('id');
	par_id=Valid_Par_Id(par_id);
	html=$(Cur_Cform_Hdr).html();
	if(Cur_Cform_Hdr=='.threaded_comments')
		{
		reset_html='<a href="#origin_cform" onclick="Reset_Comment_Form()">'+Msgs.addComment+'</a><a name="origin_cform"/>';
		$(Cur_Cform_Hdr).html(reset_html)
	}
	else
		{
		$(Cur_Cform_Hdr).html('')
	}
	Cur_Cform_Hdr='#r_f_c'+par_id;
	$(Cur_Cform_Hdr).html(html);
	$('#comment-editor').attr('src',Cform_Ins_ParID(par_id))
}
cur_url=window.location.href;
search_formid='#comment-form_';
search_index=cur_url.indexOf(search_formid);
if(search_index!=-1)
	{
	ret_id=cur_url.substring(search_index+search_formid.length);
	Display_Reply_Form('#rc'+ret_id)
}
for(var i=0;
i<Items.length;
i++)
	{
	if('parentId'in Items[i])
		{
		var par_id=Items[i].parentId;
		var par_level=parseInt($('#c'+par_id+':first').attr('data-level'));
		$('#c'+par_id+' .comment_child:first').html(function(index,oldhtml)
			{
			var child_id=Items[i].id;
			if(par_level>=Config.maxThreadDepth)
				{
				$('#c'+child_id+':first .comment_reply').remove()
			}
			var child_html=$('#c'+child_id+':first').html();
			child_html='<div class="comment_wrap" id="c'+child_id+'" data-level="'+(par_level+1)+'">'+child_html+'</div>';
			$('#c'+child_id).remove();
			return(oldhtml+child_html)
		}
		)
	}
}
var avatar=$("#comments");
avatar.find('.comment_avatar img').each(function()
	{
	var ava=$(this).attr('src');
	$(this).show().attr('src',ava.replace(/\/s[0-9]+(\-c)?\//,"/s45-c/"))
}
);
