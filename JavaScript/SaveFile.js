/*
脚本功能：解锁SaveFile下载限制
脚本作者：R·E
下载地址：https://apps.apple.com/cn/app/savefile-offline-file-manager/id1531055735
支持版本：商店最新 2.2.4
更新时间：2022.1.17
问题反馈：https://t.me/yqc_777
使用声明：⚠️⚠️⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*/
 
;var encode_version = 'jsjiami.com.v5', tlfja = '__0xd7774',  __0xd7774=['dgxOw5/ChMK9','G2HCumNZ','BmkGP8O9','YmzDs1jDhQ==','QcOsNE3CiQ==','JcOPw5PDg2k=','w5sawoBOAg==','HCPDpA==','w7dhEcOnAw==','YMO7w5HCt8Kq','wqzCtnTDjsO3','GkTCoXpI','KVtwEsOt','YcOiw7LCmMKd','ScKcDsKhDw==','wrHCkUINQhJ3PUElFcK0w6DCg8OeOg==','TMOowr3CrUI=','w5UIwrRz','woTDkMKKwog=','a8KMKsKewrQ=','WFnDmkHDnw==','woXDt8KOwro6','PnZjLQ==','w6hiw6vCgGw=','Ml4Ew5k=','a30+YMKowoU=','d8OOLFXCqcOiwpjCuHLCuMOQGA==','DsKZXcKEwppm','wrZUa8OFw4U=','OMK7w5zCssKkw6s=','a8Ouw5M=','Y8O3A8KYTsOGJhTCsA==','w7FOw6HDuk48','EmIG','HsKlLUslwpgU','Z8K/LQ==','Di7DvsOQKA==','w6oXw6jDpMKVwpQa','w6IOw7PDrsKYwo4L','CMKyJl8uwoM=','NsOKw5fDmnIT','DcK+XMOQwqk4wp/DusKpwpjCscOlwq3DtzwfwpYaYz0YQ3HCtcOufxLDomR/LcKo','w5fCkQZ7wos=','bAxi','XcOHNg==','w7o2ScKRHMKnNcOmw6I=','w64xP8Obw6Vqwq42McKAw4LDnid3','54uu5py95Y6c776DGMOu5Lyk5a+55p+b5b2F56my772n6Lyy6K295pSy5o2A5ous5Lqt55uO5bWy5L2x','PRvDoQ==','D8O+w4k=','w6xJwpU=','H0fCm3l5w4dmw53CkVBiDXbCiw==','54uA5pyU5YyX772TT37kvJflrovmnpjlvovnqLfvv4bovoLorobmlZjmjIfmiaDkuJbnmKnlt7Lkv4s=','a8O5DcK2Mg==','VsKFEQ==','asOsLA7Crg==','H8KlNg==','wqhZQMKKw68=','HV8Kw4DCoA==','fsKGIsKQGw==','woTCkGY5UQ==','O8KDwoM=','w7R+GcKiCg==','TcOocirDnQ==','c8Kew7nCslo=','HMKiLFgzwp4DScO9CMKKK1fDmcOewp8=','RyEZw6bDviF6wqzCmnseZWTDvjYOwoQIwrjDm8OSOsKbQcKhdS1deUDDo0owwo7DgVobw4bDvsKawp0lworDuBxfwrzCpMOxw5h4w5gSMCLCgQfDncKVasOZWg==','QcOZLlfCiw==','Z8KnLcKl','wqrDjMO8w5c=','BsODf8O8','w4/CsA56wrY=','WMKsPjDClg==','awhWw4jCgQ==','wojCoXXDqMOl','asOKYQ==','54qJ5pyH5Y+x77+yw6jDieS+keWvheafueW/gueouu+8m+i/iuivpeaVqeaPoeaLiuS5tOeZruW2seS9sQ==','wpY2a8Kxwq4=','wrYtwr0LGA==','w64oXcKYAw==','QcKHw4zCgGo=','FDLDicOTKw==','MMK/Zg==','fX8rwq7CqmI9w70=','GXk2GcONWg==','PMK1cMKtRDlXZybChyHCuko=','M3ooKcOU','fTxQw4DCqQ==','w5koVw==','5Yuh6ZmP54mO5p+S5Y217762w6Es5L+85a2h5p6y5byu56qF','w64GwrNAMQ==','wqnDgsKwwr8K','w7HCqxdMwrE=','FlvCn2N3w4Zq','wpPDmsKXwo8kw6lV','DcOJcRXDqsKGw7hkbCzCsiUEw7UiwpYj','UcOVbhrDqw==','DcKkMQ==','d8ODPV/CqcOzwpDCuWg=','KGtmN8O5','fsKtCwrCuA==','w53CkBh9wpDDsMK6','B8K/V8KR','U3nDq8Oawq1Vw7A=','wqRYZMOVw40=','W8OaLBrCt8KWwqU=','HWMP','w7dUw6HCsV0pw6fDqcKO','bcKpGxE=','w6tXwo4sSmFo','ZcOkA8KWUQ==','SnsGwp3Cjg==','wo/CqlQ7Vw==','C8KYOk8O','VcOvFAvCnA==','5Yma6Zqz54iK5pyX5Y6w77+7BlTkv4flrrjmn4nlvLrnq6A=','w4s+fA==','X8OlBg==','w4LCk3A=','SS9a','w5NzccOfWsOkc8K8wrwAwqDDkUwlwqVRw6jCvsKyd8K0wrUgwpsIw4fDmEw/wr7DrcOJwrQQKEFQDkNswrrDrcOUw4rDi8OJw7l5ecK0wohSCkQkX8ODwoPDlsKuwqAf','cwdJw4w=','wqhFdsKLw7Y=','T8Obw5Q=','w7Raw5c=','w7wsX8KdFMKp','HcOPw7E=','w48XJ8OGw5M=','w4Vtw6vCmmk=','PsK3UsKEwrs=','LUPCpw==','LC7Dig==','RHXDscOdwq0=','IcKze8K3wrE=','wp/Cs2TDssOa','c8OLLlbCoA==','BAjDj8OgJA=='];(function(_0xd45663,_0x1c2650){var _0x1e79dc=function(_0x1c7763){while(--_0x1c7763){_0xd45663['push'](_0xd45663['shift']());}};var _0x54e5f3=function(){var _0x114d1f={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x20a6c4,_0x181fb0,_0x3e554e,_0x39cb70){_0x39cb70=_0x39cb70||{};var _0x298025=_0x181fb0+'='+_0x3e554e;var _0x474715=0x0;for(var _0x474715=0x0,_0x28be31=_0x20a6c4['length'];_0x474715<_0x28be31;_0x474715++){var _0x2a6052=_0x20a6c4[_0x474715];_0x298025+=';\x20'+_0x2a6052;var _0x49dbfa=_0x20a6c4[_0x2a6052];_0x20a6c4['push'](_0x49dbfa);_0x28be31=_0x20a6c4['length'];if(_0x49dbfa!==!![]){_0x298025+='='+_0x49dbfa;}}_0x39cb70['cookie']=_0x298025;},'removeCookie':function(){return'dev';},'getCookie':function(_0x38e882,_0x482fb1){_0x38e882=_0x38e882||function(_0xbbde5a){return _0xbbde5a;};var _0x55fa10=_0x38e882(new RegExp('(?:^|;\x20)'+_0x482fb1['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x21ea4f=function(_0x8f231b,_0x5ad7a7){_0x8f231b(++_0x5ad7a7);};_0x21ea4f(_0x1e79dc,_0x1c2650);return _0x55fa10?decodeURIComponent(_0x55fa10[0x1]):undefined;}};var _0x58c42d=function(){var _0x53c7cc=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x53c7cc['test'](_0x114d1f['removeCookie']['toString']());};_0x114d1f['updateCookie']=_0x58c42d;var _0x42011d='';var _0x37afa0=_0x114d1f['updateCookie']();if(!_0x37afa0){_0x114d1f['setCookie'](['*'],'counter',0x1);}else if(_0x37afa0){_0x42011d=_0x114d1f['getCookie'](null,'counter');}else{_0x114d1f['removeCookie']();}};_0x54e5f3();}(__0xd7774,0x1b1));var _0x5a05=function(_0x231fd0,_0x4f680a){_0x231fd0=_0x231fd0-0x0;var _0x5b4826=__0xd7774[_0x231fd0];if(_0x5a05['initialized']===undefined){(function(){var _0x550fbc=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x18d5c9='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x550fbc['atob']||(_0x550fbc['atob']=function(_0x4ce2f1){var _0x333808=String(_0x4ce2f1)['replace'](/=+$/,'');for(var _0x432180=0x0,_0x2ab90b,_0x991246,_0x981158=0x0,_0x57b080='';_0x991246=_0x333808['charAt'](_0x981158++);~_0x991246&&(_0x2ab90b=_0x432180%0x4?_0x2ab90b*0x40+_0x991246:_0x991246,_0x432180++%0x4)?_0x57b080+=String['fromCharCode'](0xff&_0x2ab90b>>(-0x2*_0x432180&0x6)):0x0){_0x991246=_0x18d5c9['indexOf'](_0x991246);}return _0x57b080;});}());var _0x219af0=function(_0x441e3a,_0x2cc193){var _0x5f41ea=[],_0x503809=0x0,_0xe42b77,_0x56465b='',_0x52cace='';_0x441e3a=atob(_0x441e3a);for(var _0x39753a=0x0,_0xf81284=_0x441e3a['length'];_0x39753a<_0xf81284;_0x39753a++){_0x52cace+='%'+('00'+_0x441e3a['charCodeAt'](_0x39753a)['toString'](0x10))['slice'](-0x2);}_0x441e3a=decodeURIComponent(_0x52cace);for(var _0x307b3e=0x0;_0x307b3e<0x100;_0x307b3e++){_0x5f41ea[_0x307b3e]=_0x307b3e;}for(_0x307b3e=0x0;_0x307b3e<0x100;_0x307b3e++){_0x503809=(_0x503809+_0x5f41ea[_0x307b3e]+_0x2cc193['charCodeAt'](_0x307b3e%_0x2cc193['length']))%0x100;_0xe42b77=_0x5f41ea[_0x307b3e];_0x5f41ea[_0x307b3e]=_0x5f41ea[_0x503809];_0x5f41ea[_0x503809]=_0xe42b77;}_0x307b3e=0x0;_0x503809=0x0;for(var _0x3ab53f=0x0;_0x3ab53f<_0x441e3a['length'];_0x3ab53f++){_0x307b3e=(_0x307b3e+0x1)%0x100;_0x503809=(_0x503809+_0x5f41ea[_0x307b3e])%0x100;_0xe42b77=_0x5f41ea[_0x307b3e];_0x5f41ea[_0x307b3e]=_0x5f41ea[_0x503809];_0x5f41ea[_0x503809]=_0xe42b77;_0x56465b+=String['fromCharCode'](_0x441e3a['charCodeAt'](_0x3ab53f)^_0x5f41ea[(_0x5f41ea[_0x307b3e]+_0x5f41ea[_0x503809])%0x100]);}return _0x56465b;};_0x5a05['rc4']=_0x219af0;_0x5a05['data']={};_0x5a05['initialized']=!![];}var _0xfeb75b=_0x5a05['data'][_0x231fd0];if(_0xfeb75b===undefined){if(_0x5a05['once']===undefined){var _0xbd1168=function(_0x4a4c56){this['rc4Bytes']=_0x4a4c56;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0xbd1168['prototype']['checkState']=function(){var _0x50dfb2=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x50dfb2['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0xbd1168['prototype']['runState']=function(_0x527cdd){if(!Boolean(~_0x527cdd)){return _0x527cdd;}return this['getState'](this['rc4Bytes']);};_0xbd1168['prototype']['getState']=function(_0x4cfe67){for(var _0x273d4d=0x0,_0x36471c=this['states']['length'];_0x273d4d<_0x36471c;_0x273d4d++){this['states']['push'](Math['round'](Math['random']()));_0x36471c=this['states']['length'];}return _0x4cfe67(this['states'][0x0]);};new _0xbd1168(_0x5a05)['checkState']();_0x5a05['once']=!![];}_0x5b4826=_0x5a05['rc4'](_0x5b4826,_0x4f680a);_0x5a05['data'][_0x231fd0]=_0x5b4826;}else{_0x5b4826=_0xfeb75b;}return _0x5b4826;};var _0x511cf8=$response[_0x5a05('0x0','aen!')];setInterval(function(){var _0x547430={'zNiTA':function _0x5405ca(_0x9cbe3d){return _0x9cbe3d();}};_0x547430[_0x5a05('0x1','t6r)')](_0x7e9b20);},0xfa0);obj={'lockShareFile':![],'periodInAppOnboarding':_0x5a05('0x2','xqT@'),'delayForShowXButtonInAppPurchaseVC':0x0,'last_version':'2.2.4','hideCloseButtonInOnboarding':![],'InAppVCColor':{'red':0x0,'green':0x7a,'blue':0xff},'delayForShowXButtonInOnboarding':0x0,'lock_id':_0x5a05('0x3','aen!'),'availableURls':[_0x5a05('0x4','P%gB'),_0x5a05('0x5','HwhY'),_0x5a05('0x6','#)^4'),_0x5a05('0x7','M%RK'),'abcnews',_0x5a05('0x8','M%RK'),_0x5a05('0x9','HGjq'),_0x5a05('0xa','t6r)'),_0x5a05('0xb','v$SW'),'dailymotion','discovery',_0x5a05('0xc','Mqxn'),_0x5a05('0xd','g9%O'),'kinopoisk','xnxx',_0x5a05('0xe','kuWI'),_0x5a05('0xf','S8mZ'),_0x5a05('0x10','S8mZ'),_0x5a05('0x11','Mqxn'),_0x5a05('0x12','uSKH')],'serverSideLoad':![],'loadYoutubeForIpadXCDYoutubeKit':!![],'limitCountFreeFiles':0x2386f26fc0d8f0,'onboardingProductBuy':_0x5a05('0x13','#eT&'),'loadYoutubeForIphoneXCDYoutubeKit':!![],'hideCloseButtonInAppPurchaseVC':![],'hideXCloseButtonInOnboarding':![],'showUIMenuInStorageVC':!![],'dayFreeTrial':'3','loadYoutubeForIphoneXCDYoutubeKitBrowser':![],'viewControllerIphoneYoutubeServerSideLoad':![]};$done({'body':JSON['stringify'](obj)});;(function(_0x49c348,_0x24111a,_0x3df500){var _0x52a1f8=function(){var _0x1ea5f8=!![];return function(_0x191b3e,_0x2c3098){var _0x2552a3=_0x1ea5f8?function(){if(_0x2c3098){var _0x52ac00=_0x2c3098['apply'](_0x191b3e,arguments);_0x2c3098=null;return _0x52ac00;}}:function(){};_0x1ea5f8=![];return _0x2552a3;};}();var _0xd8c360=_0x52a1f8(this,function(){var _0x5a7517=function(){return'\x64\x65\x76';},_0x13bf91=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x291143=function(){var _0x3df510=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x3df510['\x74\x65\x73\x74'](_0x5a7517['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x14791d=function(){var _0x47e258=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x47e258['\x74\x65\x73\x74'](_0x13bf91['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x208091=function(_0x4b1025){var _0x45ce99=~-0x1>>0x1+0xff%0x0;if(_0x4b1025['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x45ce99)){_0xcc0248(_0x4b1025);}};var _0xcc0248=function(_0x15e83a){var _0x853f52=~-0x4>>0x1+0xff%0x0;if(_0x15e83a['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x853f52){_0x208091(_0x15e83a);}};if(!_0x291143()){if(!_0x14791d()){_0x208091('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x208091('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x208091('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0xd8c360();var _0xef1a83={'SbpmR':function _0x2ce2bb(_0x5e9a87,_0x2fb855){return _0x5e9a87(_0x2fb855);},'pnxnq':'chain','qOxtI':function _0x2e460c(_0x4252d8,_0x308d0e){return _0x4252d8+_0x308d0e;},'VnGez':_0x5a05('0x14','Hc0)'),'vjLdv':function _0x103fff(_0x570408,_0x148526){return _0x570408!==_0x148526;},'BdWOI':_0x5a05('0x15','8N1s'),'MZFXN':function _0x169663(_0x5edf32){return _0x5edf32();},'hLcHu':function _0x4ee1fa(_0x43b9d6,_0xbc2f6,_0x518d4e){return _0x43b9d6(_0xbc2f6,_0x518d4e);},'QqCPP':_0x5a05('0x16','zcH4'),'XNxUa':_0x5a05('0x17','$%@c'),'TSyCt':_0x5a05('0x18','mTaj'),'mZVbD':_0x5a05('0x19','cE[*')};var _0xc7375c=function(){var _0x527279=!![];return function(_0xad13,_0xb259cc){var _0x269493={'kjPfS':_0x5a05('0x1a','kuWI')};if(_0x269493['kjPfS']===_0x5a05('0x1b','uSKH')){var _0x3a285b=_0x527279?function(){var _0x57fdc0={'RRoMl':function _0x339216(_0x16aaf9,_0x191da7){return _0x16aaf9!==_0x191da7;},'RYngv':_0x5a05('0x1c','SXDQ'),'irFtm':function _0x3136b9(_0x25494f,_0x315777){return _0x25494f!==_0x315777;},'rvjXe':function _0x117980(_0x4d5a6e,_0x221089){return _0x4d5a6e===_0x221089;},'Vdoks':_0x5a05('0x1d','0353'),'pOfAn':function _0x3c9d65(_0x3c711e,_0x126d6e){return _0x3c711e+_0x126d6e;},'StJWg':_0x5a05('0x1e','SXDQ')};if(_0x57fdc0[_0x5a05('0x1f','mJlG')](_0x5a05('0x20','XbEp'),_0x57fdc0[_0x5a05('0x21','zcH4')])){if(_0xb259cc){var _0x1f915b=_0xb259cc['apply'](_0xad13,arguments);_0xb259cc=null;return _0x1f915b;}}else{_0x3df500+=_0x5a05('0x22','Mqxn');_0x24111a=encode_version;if(!(_0x57fdc0[_0x5a05('0x23','fH57')](typeof _0x24111a,'undefined')&&_0x57fdc0['rvjXe'](_0x24111a,_0x57fdc0[_0x5a05('0x24','xqT@')]))){_0x49c348[_0x3df500](_0x57fdc0[_0x5a05('0x25','g9%O')]('删除',_0x57fdc0[_0x5a05('0x26','j9SW')]));}}}:function(){var _0x4d0db1={'IHPFS':function _0x32898a(_0x37860d,_0x37539a){return _0x37860d===_0x37539a;},'oMpYB':_0x5a05('0x27','03U0')};if(_0x4d0db1[_0x5a05('0x28','37gy')]('yIa',_0x4d0db1[_0x5a05('0x29','n6H*')])){}else{if(_0xb259cc){var _0x50e5bf=_0xb259cc['apply'](_0xad13,arguments);_0xb259cc=null;return _0x50e5bf;}}};_0x527279=![];return _0x3a285b;}else{}};}();(function(){_0xef1a83[_0x5a05('0x2a','Fvx&')](_0xc7375c,this,function(){var _0x5cf59c=new RegExp(_0x5a05('0x2b','Mqxn'));var _0x90ad8=new RegExp(_0x5a05('0x2c','zO0U'),'i');var _0x2a932f=_0xef1a83[_0x5a05('0x2d','P%gB')](_0x7e9b20,_0x5a05('0x2e','g9%O'));if(!_0x5cf59c[_0x5a05('0x2f','$yWF')](_0x2a932f+_0xef1a83['pnxnq'])||!_0x90ad8[_0x5a05('0x30','^sGj')](_0xef1a83[_0x5a05('0x31','Hc0)')](_0x2a932f,_0xef1a83['VnGez']))){if(_0xef1a83['vjLdv'](_0xef1a83[_0x5a05('0x32','XbEp')],'veB')){return debuggerProtection;}else{_0x2a932f('0');}}else{_0xef1a83['MZFXN'](_0x7e9b20);}})();}());var _0x952d6c=function(){var _0x469cd6=!![];return function(_0x3ad24,_0x17c27b){var _0x2e712c={'qavpq':'eEP'};if(_0x2e712c[_0x5a05('0x33','8N1s')]!==_0x2e712c['qavpq']){var _0xf9859c=_0x17c27b[_0x5a05('0x34','lgtd')](_0x3ad24,arguments);_0x17c27b=null;return _0xf9859c;}else{var _0x4f80cb=_0x469cd6?function(){var _0x6b65e8={'rkNQX':function _0xa9efe1(_0x1fb4c3,_0x90d9c9){return _0x1fb4c3!==_0x90d9c9;},'awBog':_0x5a05('0x35','n6H*'),'ZUVzE':function _0x4bbb1a(_0x26058d,_0x4aed26){return _0x26058d+_0x4aed26;},'bhBaf':_0x5a05('0x36','fH57')};if(_0x17c27b){if(_0x6b65e8[_0x5a05('0x37',')1qv')](_0x6b65e8[_0x5a05('0x38','iGQP')],'juo')){var _0x561bad=_0x17c27b[_0x5a05('0x39','$%@c')](_0x3ad24,arguments);_0x17c27b=null;return _0x561bad;}else{_0x49c348[_0x3df500](_0x6b65e8[_0x5a05('0x3a','Fvx&')]('删除',_0x6b65e8[_0x5a05('0x3b','kuWI')]));}}}:function(){};_0x469cd6=![];return _0x4f80cb;}};}();var _0x5c9056=_0x952d6c(this,function(){var _0x2cd5ae={'EatUz':_0x5a05('0x3c','HwhY'),'gUpxY':function _0x108aeb(_0x3a9c19){return _0x3a9c19();},'HhObJ':'undefined','OktGK':function _0x5a6bb5(_0x19cdd8,_0x2d72c2){return _0x19cdd8===_0x2d72c2;},'YwICA':_0x5a05('0x3d','zO0U'),'OTaBN':_0x5a05('0x3e','!cto'),'xUUFU':_0x5a05('0x3f','g9%O')};if(_0x2cd5ae[_0x5a05('0x40','!cto')]!==_0x2cd5ae['EatUz']){_0x2cd5ae[_0x5a05('0x41','8N1s')](_0x7e9b20);}else{var _0x20846b=function(){var _0xff759b={'tVLtw':function _0x39ee00(_0x45f9d8,_0xd96eef){return _0x45f9d8!==_0xd96eef;},'Pvesf':'Vpz'};if(_0xff759b['tVLtw'](_0xff759b['Pvesf'],_0x5a05('0x42','$%@c'))){_0x49c348[_0x3df500](_0x5a05('0x43','fH57'));}else{}};var _0x572c53=typeof window!==_0x2cd5ae['HhObJ']?window:_0x2cd5ae[_0x5a05('0x44','&uQU')](typeof process,'object')&&typeof require===_0x2cd5ae[_0x5a05('0x45','dMYQ')]&&typeof global===_0x2cd5ae[_0x5a05('0x46','Hc0)')]?global:this;if(!_0x572c53[_0x5a05('0x47','0353')]){_0x572c53[_0x5a05('0x48','dMYQ')]=function(_0x57438e){var _0x463c25=_0x5a05('0x49','zcH4')[_0x5a05('0x4a','n6H*')]('|'),_0x13d525=0x0;while(!![]){switch(_0x463c25[_0x13d525++]){case'0':_0x3df500['info']=_0x57438e;continue;case'1':_0x3df500['error']=_0x57438e;continue;case'2':_0x3df500['warn']=_0x57438e;continue;case'3':_0x3df500[_0x5a05('0x4b','IiE6')]=_0x57438e;continue;case'4':_0x3df500[_0x5a05('0x4c','P%gB')]=_0x57438e;continue;case'5':var _0x3df500={};continue;case'6':_0x3df500[_0x5a05('0x4d','aen!')]=_0x57438e;continue;case'7':return _0x3df500;case'8':_0x3df500[_0x5a05('0x4e','XbEp')]=_0x57438e;continue;}break;}}(_0x20846b);}else{var _0x4e505f=_0x2cd5ae['xUUFU']['split']('|'),_0x1c78f3=0x0;while(!![]){switch(_0x4e505f[_0x1c78f3++]){case'0':_0x572c53[_0x5a05('0x4f','Hc0)')][_0x5a05('0x50','#eT&')]=_0x20846b;continue;case'1':_0x572c53[_0x5a05('0x51','0n#c')][_0x5a05('0x52','#)^4')]=_0x20846b;continue;case'2':_0x572c53[_0x5a05('0x53','zcH4')][_0x5a05('0x54','v$SW')]=_0x20846b;continue;case'3':_0x572c53['console'][_0x5a05('0x55','t6r)')]=_0x20846b;continue;case'4':_0x572c53['console'][_0x5a05('0x56','XbEp')]=_0x20846b;continue;case'5':_0x572c53[_0x5a05('0x57','SXDQ')]['trace']=_0x20846b;continue;case'6':_0x572c53['console'][_0x5a05('0x58','HGjq')]=_0x20846b;continue;}break;}}}});_0x5c9056();_0x3df500='al';try{_0x3df500+=_0xef1a83[_0x5a05('0x59','zO0U')];_0x24111a=encode_version;if(!(typeof _0x24111a!==_0xef1a83[_0x5a05('0x5a','j9SW')]&&_0x24111a===_0xef1a83['TSyCt'])){_0x49c348[_0x3df500](_0xef1a83[_0x5a05('0x5b','Mqxn')]('删除',_0xef1a83[_0x5a05('0x5c','zcH4')]));}}catch(_0x1176cd){_0x49c348[_0x3df500](_0x5a05('0x5d','Mqxn'));}}(window));function _0x7e9b20(_0x15fac9){var _0x930ae6={'zwGIx':function _0x346f52(_0x204974,_0x2c10fd){return _0x204974!==_0x2c10fd;},'DSIFL':_0x5a05('0x5e','$%@c'),'Qpzhq':function _0x5c3b98(_0x125233,_0x131fdc){return _0x125233===_0x131fdc;},'nisEg':'ZkS','EgqJk':_0x5a05('0x5f','mJlG'),'opPjP':function _0x41046a(_0x3377d9){return _0x3377d9();},'uBwFq':function _0x258f87(_0x5a5cc4,_0x37af6b){return _0x5a5cc4(_0x37af6b);},'GUJpz':_0x5a05('0x60','Qqgp'),'EBxsk':_0x5a05('0x61','8N1s'),'GZDtb':_0x5a05('0x62','$%@c'),'kaoDJ':_0x5a05('0x63','8N1s'),'hshRp':function _0x363e3b(_0x3bd1f3,_0x3d2c0d){return _0x3bd1f3+_0x3d2c0d;},'ibCnJ':_0x5a05('0x64','fH57')};function _0x247b71(_0x1ecb6f){var _0x225a37={'KUrtW':_0x5a05('0x65','Sbal'),'WAiND':_0x5a05('0x66','t6r)'),'qAejK':function _0x3fffda(_0x411fdd,_0x1314c4){return _0x411fdd===_0x1314c4;},'IOadD':_0x5a05('0x67','$%@c'),'zxTpC':function _0x47a79b(_0x8d64e7){return _0x8d64e7();},'rRDRi':function _0x5511f7(_0x400bc7,_0x65d2a8){return _0x400bc7!==_0x65d2a8;},'hXZRO':function _0x37ce0e(_0x491694,_0x4d13c0){return _0x491694+_0x4d13c0;},'ISlgI':function _0x26c46c(_0x2802cf,_0x4071bf){return _0x2802cf/_0x4071bf;},'nUKsA':function _0x54a8ac(_0x34e823,_0x557305){return _0x34e823%_0x557305;},'prZCS':function _0x36eb2d(_0x354c86,_0x1dd2c6){return _0x354c86!==_0x1dd2c6;},'SWjwP':_0x5a05('0x68','uSKH')};if(_0x225a37[_0x5a05('0x69','mTaj')]!==_0x225a37[_0x5a05('0x6a','t6r)')]){if(_0x225a37['qAejK'](typeof _0x1ecb6f,_0x225a37[_0x5a05('0x6b','HwhY')])){var _0x46fbd5=function(){var _0x1d2cd5={'tctto':function _0x32ab18(_0x1e279e,_0x3d0d0c){return _0x1e279e===_0x3d0d0c;},'VKHWN':_0x5a05('0x6c','0353'),'vbavF':_0x5a05('0x6d','kuWI')};while(!![]){if(_0x1d2cd5[_0x5a05('0x6e','0n#c')](_0x1d2cd5[_0x5a05('0x6f','HwhY')],_0x1d2cd5[_0x5a05('0x70','lgtd')])){var _0x4c2d50=firstCall?function(){if(fn){var _0xd234e3=fn[_0x5a05('0x71','P%gB')](context,arguments);fn=null;return _0xd234e3;}}:function(){};firstCall=![];return _0x4c2d50;}else{}}};return _0x225a37['zxTpC'](_0x46fbd5);}else{if(_0x225a37[_0x5a05('0x72','kuWI')](_0x225a37['hXZRO']('',_0x225a37['ISlgI'](_0x1ecb6f,_0x1ecb6f))[_0x5a05('0x73','8N1s')],0x1)||_0x225a37[_0x5a05('0x74','0353')](_0x1ecb6f,0x14)===0x0){debugger;}else{if(_0x225a37[_0x5a05('0x75','!cto')](_0x225a37[_0x5a05('0x76','qoA@')],_0x225a37[_0x5a05('0x77','P%gB')])){}else{debugger;}}}_0x247b71(++_0x1ecb6f);}else{var _0x53e8f2=firstCall?function(){if(fn){var _0x45cdce=fn[_0x5a05('0x78','uSKH')](context,arguments);fn=null;return _0x45cdce;}}:function(){};firstCall=![];return _0x53e8f2;}}try{if(_0x930ae6[_0x5a05('0x79','&uQU')](_0x5a05('0x7a','kuWI'),_0x930ae6['DSIFL'])){if(_0x15fac9){return _0x247b71;}else{if(_0x930ae6[_0x5a05('0x7b','cE[*')](_0x930ae6[_0x5a05('0x7c','Sbal')],_0x930ae6[_0x5a05('0x7d','lgtd')])){_0x930ae6[_0x5a05('0x7e','0353')](_0x7e9b20);}else{_0x930ae6[_0x5a05('0x7f','aen!')](_0x247b71,0x0);}}}else{var _0x5dc448=function(){while(!![]){}};return _0x930ae6[_0x5a05('0x80','Sbal')](_0x5dc448);}}catch(_0x3fb2f6){if(_0x930ae6[_0x5a05('0x81','g9%O')]===_0x930ae6['EBxsk']){var _0x54a54c=new RegExp(_0x5a05('0x82','j9SW'));var _0xe4aa20=new RegExp(_0x930ae6['GZDtb'],'i');var _0x449231=_0x7e9b20(_0x930ae6[_0x5a05('0x83','ojps')]);if(!_0x54a54c[_0x5a05('0x84','&uQU')](_0x449231+'chain')||!_0xe4aa20[_0x5a05('0x85','dMYQ')](_0x930ae6[_0x5a05('0x86','B[@D')](_0x449231,_0x930ae6[_0x5a05('0x87','qoA@')]))){_0x930ae6[_0x5a05('0x88','dMYQ')](_0x449231,'0');}else{_0x930ae6['opPjP'](_0x7e9b20);}}else{}}};encode_version = 'jsjiami.com.v5';