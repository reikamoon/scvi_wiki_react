(this.webpackJsonpscvi_wiki_react=this.webpackJsonpscvi_wiki_react||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),o=a(16),r=a.n(o),l=(a(25),a(26),a(27),a(9)),d=a(3),h=(a(28),a(8)),s=a(0);var c=function(){var e=Object(d.e)();return Object(s.jsx)("button",{onClick:function(t){var a=Math.floor(Math.random()*h.length);e.push("/details/".concat(a))},children:"Random Character"})};var p=function(){return Object(s.jsx)("div",{className:"Header",children:Object(s.jsxs)("header",{children:[Object(s.jsx)("h1",{children:"SOULCALIBUR VI CHARACTER COMPENDIUM"}),Object(s.jsx)("div",{className:"Header-Subtitle",children:"Welcome Back to the Stage of History"}),Object(s.jsx)(l.c,{className:"nav-link",activeClassName:"nav-link-active",exact:!0,to:"/",children:"List"}),Object(s.jsx)(c,{})]})})};var u=function(e){var t=e.name,a=e.img,i=e.title,n=e.weapontype,o=e.difficulty,r=e.quote,d=e.id;return Object(s.jsxs)("div",{className:"CharaDetails",children:[Object(s.jsx)(l.b,{to:"/details/".concat(d),children:Object(s.jsx)("img",{src:"".concat("/scvi_wiki_react","images/").concat(a),width:"350",height:"400",alt:"Image"})}),Object(s.jsxs)("h1",{children:[t,", ",i]}),Object(s.jsxs)("div",{children:['"',r,'"']}),Object(s.jsxs)("h3",{children:["Weapon: ",n]}),Object(s.jsxs)("h3",{children:["Difficulty: ",o]})]})};a(35);var g=function(){var e=h.map((function(e,t){var a=e.name,i=e.title,n=e.img,o=e.quote,r=e.weapontype,l=e.difficulty,d=e.key;return Object(s.jsx)(u,{id:t,name:a,title:i,img:n,quote:o,weapontype:r,difficulty:l},d)}));return Object(s.jsx)("div",{className:"CastList",children:e})};a(36);var m=function(){var e=(new Date).getFullYear();return Object(s.jsx)("div",{className:"footer",children:Object(s.jsxs)("h4",{children:["reikamoon \xa9",e," "]})})},y=a(20);a(37);var b=function(e){var t=e.match.params.id,a=h[t],i=a.key,n=a.name,o=a.title,r=a.quote,l=a.portrait,d=a.gender,c=(a.birthplace,a.birthday,a.status),p=a.height,u=a.weight,g=a.bloodtype,m=a.weapontype,b=a.weaponname,w=a.fightstyle,v=a.difficulty,f=a.engva,j=a.jpva,S=a.debut,k=a.video;return Object(s.jsxs)("div",{children:[Object(s.jsx)("style",{children:"\n            body {\n                overflow-y: scroll;\n                overflow-x: hidden;\n            }\n        "}),Object(s.jsx)("div",{className:"Portrait",children:Object(s.jsx)("img",{src:"".concat("/scvi_wiki_react","images/").concat(l),width:"392",height:"696",alt:"Image"})}),Object(s.jsx)("div",{className:"Name",children:Object(s.jsxs)("h1",{children:[n,", ",o]})}),Object(s.jsxs)("div",{className:"Bio",children:[Object(s.jsxs)("h3",{children:['"',r,'" - ',n]}),Object(s.jsxs)("h2",{children:[n," is a playable character in SOULCALIBUR VI. First appearing in ",S,", ",i," is recommended for ",v," players. In the most recent installment of the series, ",i," wields a ",m,', "',b,'".']})]}),Object(s.jsx)("div",{className:"charatable",children:Object(s.jsxs)(y.a,{children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Status"}),Object(s.jsx)("th",{children:"Gender"}),Object(s.jsx)("th",{children:"Height"}),Object(s.jsx)("th",{children:"Weight"}),Object(s.jsx)("th",{children:"Blood Type"})]})}),Object(s.jsx)("tbody",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:c}),Object(s.jsx)("td",{children:d}),Object(s.jsx)("td",{children:p}),Object(s.jsx)("td",{children:u}),Object(s.jsx)("td",{children:g})]})}),Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Weapon"}),Object(s.jsx)("th",{children:"Weapon Name"}),Object(s.jsx)("th",{children:"Fighting Style"}),Object(s.jsx)("th",{children:"English Voice"}),Object(s.jsx)("th",{children:"Japanese Voice"})]})}),Object(s.jsx)("tbody",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:m}),Object(s.jsx)("td",{children:b}),Object(s.jsx)("td",{children:w}),Object(s.jsx)("td",{children:f}),Object(s.jsx)("td",{children:j})]})})]})}),Object(s.jsx)("div",{className:"video",children:Object(s.jsx)("iframe",{width:"1400",height:"750",src:k,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})]})},w=a(19);function v(){var e=Object(i.useState)(!1),t=Object(w.a)(e,2),a=t[0],n=t[1],o=function(){window.pageYOffset>300?n(!0):n(!1)};return Object(i.useEffect)((function(){window.addEventListener("scroll",o)}),[]),Object(s.jsx)("div",{className:"scroll-to-top",children:a&&Object(s.jsx)("div",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(s.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Eo_circle_red_arrow-up.svg/480px-Eo_circle_red_arrow-up.svg.png",width:"100",height:"100",alt:"Go to Top"})})})}var f=function(){return Object(s.jsx)(l.a,{children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(p,{}),Object(s.jsx)(d.a,{exact:!0,path:"/",component:g}),Object(s.jsx)(d.a,{path:"/details/:id",component:b}),Object(s.jsx)(v,{}),Object(s.jsx)(m,{})]})})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,39)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),i(e),n(e),o(e),r(e)}))};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),j()},8:function(e){e.exports=JSON.parse('[{"key":"Gr\xf8h","name":"Gr\xf8h","title":"The Agent in Black","quote":"Do not hold back; however, I will.","img":"Groh.png","portrait":"PORTRAITS/Groh.png","gender":"Male","birthplace":"Kingdom of Denmark-Norway","birthday":"November 18th","status":"Unknown","height":"5\'11 (181cm)","weight":"180lbs (82kg)","bloodtype":"A","weapontype":"Twinblade","weaponname":"Arondight Replica","fightstyle":"Aval Dual-Swordsmanship","difficulty":"Beginner","engva":"Xander Mobus","jpva":"Takahiro Sakurai","debut":"SOULCALIBUR VI","video":"https://www.youtube.com/embed/G1pkyQ2vxAo"},{"key":"Azwel","name":"Azwel","title":"Leader of Humanity","quote":"Accept this from me! My LOVE!","img":"Azwel.png","portrait":"PORTRAITS/Azwel.png","gender":"Male","birthplace":"Holy Roman Empire (present-day Germany)","birthday":"June 6th","status":"Alive","height":"6\'0 (185cm)","weight":"143lbs (65kg)","bloodtype":"AB","weapontype":"Bipolar Pulse-Enhancement Device","weaponname":"Palindrome","fightstyle":"Techniques taken from Martial Philosophy and Theory","difficulty":"Advanced","engva":"Taliesin Jaffe","jpva":"Masashi Ebara","debut":"SOULCALIBUR VI","video":"https://www.youtube.com/embed/e1iZPsdQyII"},{"key":"Mitsurugi","name":"Mitsurugi Heishiro","title":"Bodyguard in War","quote":"Depart this life!","img":"Mitsurugi.png","portrait":"PORTRAITS/Mitsurugi.png","gender":"Male","birthplace":"Bizen, Japan","birthday":"June 8th","status":"Alive","height":"5\'6 (173 cm)","weight":"156lbs (71kg)","bloodtype":"AB","weapontype":"Katana","weaponname":"Shishi-Oh","fightstyle":"Tenpu-Kosai-Ryu Kai","difficulty":"Beginner","engva":"Ray Chase","jpva":"Toshiyuki Morikawa","debut":"SOUL BLADE","video":"https://www.youtube.com/embed/u0lv_igNg_M"},{"key":"Sophitia","name":"Sophitia Alexandra","title":"Second Coming of the Oath","quote":"My resolve...will never falter!","img":"Sophitia.png","portrait":"PORTRAITS/Sophitia.png","gender":"Female","birthplace":"Athens, Ottoman Empire (present-day Greece)","birthday":"March 12th","status":"Alive","height":"5\'6 (168cm)","weight":"Will Not Reveal","bloodtype":"B","weapontype":"Short Sword and Small Shield","weaponname":"Omega Sword and Elk Shield","fightstyle":"Athenian Style","difficulty":"Beginner","engva":"Erica Lindbeck","jpva":"Chie Nakamura","debut":"SOUL BLADE","video":"https://www.youtube.com/embed/ziWNOtY28ew"},{"key":"Nightmare","name":"Nightmare","title":"The Azure Knight","quote":"No matter how bright the light, some shadows cannot be expelled!","img":"Nightmare.png","portrait":"PORTRAITS/Nightmare.png","gender":"Male","birthplace":"Unknown","birthday":"Unknown","status":"Unknown","height":"5\'6 (172cm)","weight":"346lbs (156kg)","bloodtype":"Unknown","weapontype":"Two Handed Sword (Zweih\xe4nder)","weaponname":"Soul Edge","fightstyle":"Memories of Soul Edge","difficulty":"Intermediate","engva":"Kirk Thornton","jpva":"Nobuyuki Hiyama","debut":"SOULCALIBUR","video":"https://www.youtube.com/embed/cpdu0AGpEzw"},{"key":"Xianghua","name":"Xianghua Chai","title":"Traveling Artist","quote":"Watch over me, mother!","img":"Xianghua.png","portrait":"PORTRAITS/Xianghua.png","gender":"Female","birthplace":"Beijing, Ming Empire (present-day China)","birthday":"April 2nd","status":"Alive","height":"4\'9 (152cm)","weight":"92lbs (42kg)","bloodtype":"B","weapontype":"Jian (Chinese Sword)","weaponname":"Krita-Yuga (SoulCalibur)","fightstyle":"Sword Arts Passed from her mother","difficulty":"Intermediate","engva":"Wendee Lee","jpva":"Aya Suzaki","debut":"SOULCALIBUR","video":"https://www.youtube.com/embed/e0da05lQWtg"},{"key":"Kilik","name":"Kilik","title":"Destiny Awakened","quote":"Om vajra dharma Kilik.","img":"Kilik.png","portrait":"PORTRAITS/Kilik.png","gender":"Male","birthplace":"Unknown, raised in the Ling Sheng Su Temple, Ming Empire (present-day China)","birthday":"February 9th","status":"Alive","height":"5\'5 (169cm)","weight":"138lbs (63kg)","bloodtype":"A","weapontype":"Staff","weaponname":"Kali-Yuga","fightstyle":"Ling Sheng Su Secret Arts of the Rod","difficulty":"Beginner","engva":"Grant George","jpva":"Soichiro Hoshi","debut":"SOULCALIBUR","video":"https://www.youtube.com/embed/e0da05lQWtg"},{"key":"Ivy","name":"Isabella Valentine (Ivy)","title":"Coiling Contempt/Dexter Purpure","quote":"I will give you a true death, father!","img":"Ivy.png","portrait":"PORTRAITS/Ivy.png","gender":"Female","birthplace":"London, British Empire (present-day England, United Kingdom)","birthday":"December 10th","status":"Alive","height":"5\'10 (179cm)","weight":"128lbs (58kg)","bloodtype":"Unknown","weapontype":"Snake Blade","weaponname":"Ivy Blade","fightstyle":"Unrelated Link","difficulty":"Advanced","engva":"Lani Minella","jpva":"Miyuki Sawashiro","debut":"SOULCALIBUR","video":"https://www.youtube.com/embed/aNi1jjtFdao"},{"key":"Zasalamel","name":"Zasalamel","title":"The Dark Side of Karma","quote":"Just as it is written.","img":"Zasalamel.png","portrait":"PORTRAITS/Zasalamel.png","gender":"Male","birthplace":"Unknown","birthday":"May 5th","status":"Alive","height":"6\'0 (183cm)","weight":"178lbs (81kg)","bloodtype":"B","weapontype":"Scythe","weaponname":"Kafziel","fightstyle":"Self-taught","difficulty":"Intermediate","engva":"Keith Silverstein","jpva":"Hiroshi Tsuchida","debut":"SOULCALIBUR III","video":"https://www.youtube.com/embed/mzfZm2obBag"},{"key":"Geralt","name":"Geralt of Rivia (Guest Character)","title":"The White Wolf","quote":"Ever fight a witcher? Guess not.","img":"Geralt.png","portrait":"PORTRAITS/Geralt.png","gender":"Male","birthplace":"Unknown, raised in Kaer Morhen","birthday":"Unknown","status":"Alive","height":"Unknown","weight":"Unknown","bloodtype":"Unknown","weapontype":"Long Swords","weaponname":"Witcher\'s Steel Sword and Silver Sword","fightstyle":"School of the Wolf","difficulty":"Beginner","engva":"Doug Cockle","jpva":"Kazuhiro Yamaji","debut":"SOULCALIBUR VI","video":"https://www.youtube.com/embed/33EoknxA83A"},{"key":"Siegfried","name":"Siegfried Schtauffen","title":"A Soul in Purgatory","quote":"I will not surrender to this nightmare!","img":"Siegfried.png","portrait":"PORTRAITS/Siegfried.png","gender":"Male","birthplace":"Ober-Getzenberg, Holy Roman Empire (present-day Germany)","birthday":"February 6th","status":"Alive","height":"5\'8 (172cm)","weight":"154lbs (70kg)","bloodtype":"A","weapontype":"Two Handed Sword (Zweih\xe4nder)","weaponname":"Requiem","fightstyle":"Self-taught","difficulty":"Intermediate","engva":"Kirk Thornton","jpva":"Nobuyuki Hiyama","debut":"SOUL BLADE","video":"https://www.youtube.com/embed/psSlGyseyZI"},{"key":"Taki","name":"Taki","title":"Fu-ma\'s Shadow","quote":"You\'ll be lost to history.","img":"Taki.png","portrait":"PORTRAITS/Taki.png","gender":"Female","birthplace":"F\u016b-ma no Sato, Japan","birthday":"Unknown","status":"Alive","height":"5\'7 (170cm)","weight":"117lbs (53kg)","bloodtype":"A","weapontype":"Dual Kodachi","weaponname":"Rekki-Maru and Mekki-Maru","fightstyle":"Musou-Battou-Ryu","difficulty":"Beginner","engva":"Cynthia Holloway","jpva":"Nanako Mori","debut":"SOUL BLADE","video":"https://www.youtube.com/embed/KPA3QTfwBr4"},{"key":"Yoshimitsu","name":"Yoshimitsu","title":"The Original Mechanical Ninja","quote":"Shikisoku Zeku!","img":"Yoshimitsu.png","portrait":"PORTRAITS/Yoshimitsu.png","gender":"Male","birthplace":"None","birthday":"Unknown","status":"Alive","height":"5\'7 (170cm)","weight":"125lbs (57kg)","bloodtype":"Unknown","weapontype":"Double Katana","weaponname":"Manji Sword and Fu-Ma Blade","fightstyle":"Manji Ninjitsu","difficulty":"Advanced","engva":"Mitch Urban","jpva":"Norio Wakamoto","debut":"SOULCALIBUR","video":"https://www.youtube.com/embed/OPECvPBvSFI"},{"key":"Maxi","name":"Makishi (Maxi)","title":"Dandy of the Seas","quote":"I won\'t lose \'till I have my revenge.","img":"Maxi.png","portrait":"PORTRAITS/Maxi.png","gender":"Male","birthplace":"Shuri, Ry\u016bky\u016b Kingdom (present-day Okinawa, Japan)","birthday":"May 1st","status":"Alive","height":"5\'8 (174cm)","weight":"167lbs (76kg)","bloodtype":"O","weapontype":"Nunchaku","weaponname":"Fatibal","fightstyle":"Shissen Karihadi","difficulty":"Advanced","engva":"Steve Van Wormer","jpva":"Shigeo Kiyama","debut":"SOULCALIBUR","video":"https://www.youtube.com/embed/RUM-T9VpjL4"},{"key":"Talim","name":"Talim","title":"The Last Priestess of the Winds","quote":"I dedicate this to the wind!","img":"Talim.png","portrait":"PORTRAITS/Talim.png","gender":"Female","birthplace":"Southeast Asia, Settlements of the Wind (present-day Phillippines)","birthday":"June 15","status":"Alive","height":"4\'8 (144cm)","weight":"86lbs (39kg)","bloodtype":"Unknown","weapontype":"Dual Tonfa","weaponname":"Syi Salika and Loka Luha","fightstyle":"Wind Dance","difficulty":"Beginner","engva":"Kira Buckland","jpva":"Yukari Tamura","debut":"SOULCALIBUR II","video":"https://www.youtube.com/embed/FumFHSR2x4c"},{"key":"Voldo","name":"Voldo","title":"Hell Guardian","quote":"Koh!","img":"Voldo.png","portrait":"PORTRAITS/Voldo.png","gender":"Male","birthplace":"Palermo, Kingdom of Naples (present-day Italy)","birthday":"August 25th","status":"Alive","height":"6\'0 (183cm)","weight":"174lbs (79kg)","bloodtype":"A","weapontype":"Dual Jamadhar Katars","weaponname":"Manas and Ayus","fightstyle":"Self-taught contortionism","difficulty":"Advanced","engva":"Unknown","jpva":"Unknown","debut":"SOUL BLADE","video":"https://www.youtube.com/embed/zV4GkerHeBE"},{"key":"Astaroth","name":"Astaroth","title":"The Demonic Guard/Sinister Sable","quote":"You insect! Know your place!","img":"Astaroth.png","portrait":"PORTRAITS/Astaroth.png","gender":"Male","birthplace":"Palgaea Temple, Safavid Empire (present-day Iran)","birthday":"September 3rd","status":"Deceased","height":"7\'2 (220cm)","weight":"403lbs (183kg)","bloodtype":"None","weapontype":"Giant Axe","weaponname":"Kulutues","fightstyle":"Gyulkus","difficulty":"Intermediate","engva":"Michael McConnohie","jpva":"Ry\u016bzabur\u014d \u014ctomo","debut":"SOULCALIBUR","video":"https://www.youtube.com/embed/ZFsaehtn-z4"},{"key":"Mi-na","name":"Seong Mi-na","title":"Daughter of the Bladed Rod","quote":"I have no plans to lose!","img":"Seong-Mi-na.png","portrait":"PORTRAITS/Seong Mi-na.png","gender":"Female","birthplace":"Jirisan, Korea (present-day South Korea)","birthday":"November 3rd","status":"Alive","height":"5\'3 (162cm)","weight":"105lbs (48kg)","bloodtype":"A","weapontype":"Naginata","weaponname":"Scarlet Thunder","fightstyle":"Seong-Style Longsword and Staff Techniques","difficulty":"Beginner","engva":"Erica Mendez","jpva":"Chinatsu Akasaki","debut":"SOUL BLADE","video":"https://www.youtube.com/embed/ZFsaehtn-z4?start=57"},{"key":"Tira","name":"Tira","title":"Bird of Death","quote":"You look like you wanna die!","img":"Tira.png","portrait":"PORTRAITS/Tira.png","gender":"Female","birthplace":"Unknown","birthday":"Unknown","status":"Alive","height":"5\'2 (159cm)","weight":"105lbs (48kg)","bloodtype":"AB","weapontype":"Ring Blade","weaponname":"Eiserne Drossel","fightstyle":"Dance of Death","difficulty":"Intermediate","engva":"Kate Higgins","jpva":"Masumi Asano","debut":"SOULCALIBUR III","video":"https://www.youtube.com/embed/32S4QgGNgls"},{"key":"Cervantes","name":"Cervantes de Le\xf3n","title":"The Shell of a Proud Man","quote":"Fear the name of the dread captain Cervantes!","img":"Cervantes.png","portrait":"PORTRAITS/Cervantes.png","gender":"Male","birthplace":"Valencia, Spanish Empire (present-day Spain)","birthday":"January 1st","status":"Undead","height":"6\'0 (182cm)","weight":"196lbs (89kg)","bloodtype":"None","weapontype":"Longsword and Pistol Sword","weaponname":"Acheron and Nirvana","fightstyle":"Memories of Soul Edge","difficulty":"Intermediate","engva":"Patrick Seitz","jpva":"Hiroshi Shirokuma","debut":"SOUL BLADE","video":"https://www.youtube.com/embed/IfUM6dXvRk4"},{"key":"Raphael","name":"Raphael Sorel","title":"Prelude to Madness","quote":"Do not delude yourself, thou wretched fool!","img":"Raphael.png","portrait":"PORTRAITS/Raphael.png","gender":"Male","birthplace":"Rouen, French Empire (present-day France)","birthday":"November 27th","status":"Alive","height":"5\'10 (178cm)","weight":"159lbs (72kg)","bloodtype":"A","weapontype":"Rapier","weaponname":"Flambert","fightstyle":"La Rapi\xe8re des Sorel","difficulty":"Intermediate","engva":"Charles Klausemeyer","jpva":"Yasunori Masutani","debut":"SOULCALIBUR II","video":"https://www.youtube.com/embed/FmiFotmUs5w"},{"key":"2B","name":"YoRHa No.2 Type B (2B, Guest Character)","title":"Glory to Mankind","quote":"We will continue to fight!","img":"2B.png","portrait":"PORTRAITS/placeholder.png","gender":"Female Model","birthplace":"The Bunker","birthday":"January 7th, 11942","status":"Alive","height":"5\'6 (168cm)","weight":"326lbs (148kg)","bloodtype":"None","weapontype":"Small Sword and Large Sword","weaponname":"Virtuous Treaty and Virtuous Contract","fightstyle":"Automated infantry for machine life form","difficulty":"Beginner","engva":"Kira Buckland","jpva":"Yui Ishikawa","debut":"SOULCALIBUR VI","video":"https://www.youtube.com/embed/iG12BqJLdp4"},{"key":"Amy","name":"Amy Sorel","title":"Winter Rose","quote":"Hope only brings disappointment.","img":"Amy.png","portrait":"PORTRAITS/Amy.png","gender":"Female","birthplace":"Rouen, French Empire (present-day France)","birthday":"Unknown (Met Raphael on October 22nd)","status":"Alive","height":"4\'5 (140cm)","weight":"70lbs (36kg)","bloodtype":"Unknown","weapontype":"Rapier","weaponname":"Albion","fightstyle":"Modified la Rapi\xe8re des Sorel and Natural Intuition","difficulty":"Intermediate","engva":"Heather Hogan","jpva":"Hitomi Nabatame","debut":"SOULCALIBUR III","video":"https://www.youtube.com/embed/QxPf8BhJNlQ"},{"key":"Cassandra","name":"Cassandra Alexandra","title":"Warring Maiden","quote":"I\'ll show you the price of integrity!","img":"Cassandra.png","portrait":"PORTRAITS/Cassandra.png","gender":"Female","birthplace":"Athens, Ottoman Empire (present-day Greece)","birthday":"July 20th","status":"Alive","height":"5\'5 (165cm)","weight":"Claims to have lost weight recently","bloodtype":"B","weapontype":"Short Sword and Small Shield","weaponname":"Omega Sword and Owl Shield","fightstyle":"Improvised Athenian Style","difficulty":"Beginner","engva":"Heather Halley","jpva":"Reiko Takagi","debut":"SOULCALIBUR II","video":"https://www.youtube.com/embed/7sxuT5_C1OY"},{"key":"Hilde","name":"Hildegard von Krone (Hilde)","title":"Defender of the Kingdom","quote":"I march to battle. Clear my path!","img":"Hilde.png","portrait":"PORTRAITS/Hilde.png","gender":"Female","birthplace":"Stolzstadt, Wolfkrone Kingdom","birthday":"August 13th","status":"Alive","height":"5\'1 (158cm)","weight":"110lbs (50kg)","bloodtype":"AB","weapontype":"Short Sword and Spear","weaponname":"Gl\xe4nzende Nova and Frischer Himmel","fightstyle":"Gro Erbschaft","difficulty":"Intermediate","engva":"Julie Ann Taylor","jpva":"Y\u016bko Kaida","debut":"SOULCALIBUR IV","video":"https://www.youtube.com/embed/XznU3L3uWD8"},{"key":"Haohmaru","name":"Haohmaru (Guest Character)","title":"Ronin Vagabond","quote":"I\'ll show you true swordsmanship!","img":"Haohmaru.png","portrait":"PORTRAITS/placeholder.png","gender":"Male","birthplace":"J\u014dkamachi, Musashi Province, Japan","birthday":"September 5th, 1763","status":"Alive","height":"5\'7 (173cm)","weight":"141lbs (64kg)","bloodtype":"A","weapontype":"Katana and Sake Jug","weaponname":"Fugudoku","fightstyle":"Self-Taught","difficulty":"Beginner","engva":"Unknown","jpva":"Daiki Nakamura","debut":"SOULCALIBUR VI","video":"https://www.youtube.com/embed/Y6eoPLYr3xA"},{"key":"Setsuka","name":"Setsuka","title":"Drifting Snow Blossom","quote":"You reap what you sow, and your seeds were weak.","img":"Setsuka.png","portrait":"PORTRAITS/Setsuka.png","gender":"Female","birthplace":"Offshore of Japan","birthday":"Unknown","status":"Alive","height":"5\'5 (167cm)","weight":"112lbs (51kg)","bloodtype":"A","weapontype":"Iait\u014d hidden in an oilpaper parasol","weaponname":"Ugetsu Kageuchi","fightstyle":"Shinden Tsushima-Ryu Batt\u014djyutsu","difficulty":"Advanced","engva":"Tara Platt","jpva":"Y\u014d Taichi","debut":"SOULCALIBUR III","video":"https://www.youtube.com/embed/sy8IQ5RK1Rc"},{"key":"Hwang","name":"Hwang Seong-gyeong","title":"Secret Royal Blademaster","quote":"I shall vanquish the evils of the ages!","img":"Hwang.png","portrait":"PORTRAITS/Hwang.png","gender":"Male","birthplace":"Jirisan, Joseon Dynasty Korea (present-day South Korea)","birthday":"August 8th","status":"Alive","height":"5\'9 (176cm)","weight":"174lbs(79kg)","bloodtype":"AB","weapontype":"Podao","weaponname":"Dark Thunder","fightstyle":"Hwang Style Longsword and Six Heavenly Arts","difficulty":"Beginner","engva":"SungWon Cho","jpva":"Subaru Kimura","debut":"SOUL BLADE","video":"https://www.youtube.com/embed/oC2rIDAJ3vo"}]')}},[[38,1,2]]]);
//# sourceMappingURL=main.0aa80b74.chunk.js.map