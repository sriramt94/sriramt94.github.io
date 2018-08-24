 (function () {
       angular
		.module('app', [ 'ng-coverflow', 'ng-coverflow.utils' ])
                .controller('ReportsController', [ '$scope', '$http','sharedProperties', 'StoreService', 'ngCoverflowItemFactory','$cookies', function ($scope, $http, sharedProperties, StoreService, itemFactory,$cookies) {
                    $scope.selectedIndex = 0;
         
                                                  $scope.baseName = $cookies.get("baseName");
                                                  var baseNo=StoreService.get_base();
                                                  var brCd=StoreService.get_brcd();
                                                  var url1 = StoreService.get_url();
                                                  var sharedProperties= StoreService.get_rmid();
                                                  //var sharedProperties = sharedProperties.rmid;
                                                  var portNo= StoreService.get_portNo();
                                                  
                                                  var bsnsDt=StoreService.get_bsnsDt();
                                                  var a=bsnsDt.split('-');
                                                  var c=parseInt(a[2]);
                                                  var d=1;
                                                  var e=c-d;
                                                  var bsnDt=a[0]+'-'+a[1]+'-'+e;
                                                  

                    $scope.items = [
                       /* itemFactory({ title:'Asset Allocation-Broad Report ', subtitle:'hello', imageUrl:'images/Report_blue_g1.png'  }),
                        itemFactory({ title:'Comparative Holdings ', subtitle:'', imageUrl:'images/Reports_yellow_g1.png'  }),
                        itemFactory({ title:'Model Portfolio Rebalance Report', subtitle:'', imageUrl:'images/Reports_green_g1.png'  }),
                        itemFactory({ title:'Holdings By Classification', subtitle:'', imageUrl:'images/Reports_green_g2.png'  }),
                        itemFactory({ title:'Gain/Loss By Investor', subtitle:'', imageUrl:'images/Reports_yellow_s1.png'  }),
                        itemFactory({ title:'Yeild By Portfolio', subtitle:'', imageUrl:'images/Reports_violet_g1.png'  }),
                        itemFactory({ title:'Transactions By Portfolio', subtitle:'', imageUrl:'images/Reports_yellow_g2.png'  }),
						itemFactory({ title:'Gain/Loss By Investor ', subtitle:'', imageUrl:'images/Report_blue_g1.png'  }), */
                                    itemFactory({ title:'Asset Allocation', subtitle:'REP1 2', imageUrl:'images/Report_blue_g1.png' }),
                                    itemFactory({ title:'Comparative Holdings ', subtitle:'REP11 1', imageUrl:'images/Reports_yellow_g1.png'  }),
                                    itemFactory({ title:'Holdings Statement', subtitle:'REP12 2', imageUrl:'images/Reports_violet_g1.png'  }),
                                    itemFactory({ title:'Portfolio Statement', subtitle:'REP14 1', imageUrl:'images/Reports_green_g2.png'  }),
                                    itemFactory({ title:'Portfolio Statement- Transaction', subtitle:'REP15 1', imageUrl:'images/Report_blue_g1.png'  }),
                                    itemFactory({ title:'Transactions Statement', subtitle:'REP19 1', imageUrl:'images/Reports_yellow_g1.png'  }),
                                    itemFactory({ title:'Lead And Prospect Not Contacted ', subtitle:'REP20 2', imageUrl:'images/Reports_yellow_s1.png'  }),
                                    itemFactory({ title:'Inactive Accounts Report', subtitle:'REP21 2', imageUrl:'images/Reports_green_g1.png'  }),
                                    itemFactory({ title:'Services Availed Report', subtitle:'REP22 2', imageUrl:'images/Reports_green_g2.png'  }),
                                    
                                    itemFactory({ title:'Current vs Model Performance ', subtitle:'REP24 1', imageUrl:'images/Reports_green_g1.png'  }),
                                    itemFactory({ title:'Model Portfolio Rebalance ', subtitle:'REP3 2', imageUrl:'images/Reports_green_g1.png'  }),
                                    itemFactory({ title:'Holdings By Classificatin', subtitle:'REP4 2', imageUrl:'images/Reports_green_g2.png'  }),
                                    itemFactory({ title:'Realized Gain_Loss ', subtitle:'REP6 1', imageUrl:'images/Report_blue_g1.png'  }),
                                    itemFactory({ title:'Unrealized Gain_Loss ', subtitle:'REP7 1', imageUrl:'images/Reports_violet_g1.png'  }),
                                    itemFactory({ title:'Yield By Portfolio', subtitle:'REP8 2', imageUrl:'images/Reports_yellow_g2.png'  }),
                                    itemFactory({ title:'Transactions By Portfolio ', subtitle:'REP9 1', imageUrl:'images/Report_blue_g1.png'  }),
                                    itemFactory({ title:'Model Portfolio Rebalance-Held Away ', subtitle:'REP23 2', imageUrl:'images/Reports_green_g1.png'  }),
                                    itemFactory({ title:'Asset Allocation ', subtitle:'REP1 2', imageUrl:'images/Report_blue_g1.png'  }),
                                    
                                    
                    ];

                    $scope.itemClickHandler = function (item) {
                                                  var s= item.subtitle;
                                                  var t = s.split(" ");
                                                  var u;
                                                  if(t[1]== '1'){
                                                  u = bsnDt;
                                                  }else{
                                                  u = bsnsDt;
                                                  
                                                  
                                                  }
                                                  
 
                                              //   alert(url1+'/FABXRest/rest/IWealthPortalRestService/getRMClientReport?formAction=GENERATE_REPORT&bsno='+baseNo+'&reportType='+t[0]+'&prtfliono='+portNo+'&fromDate='+u+'&toDate='+bsnsDt+'&transType=null&benchMark=NSE%2Csadfsafd&Goal=null&reportName=REP11&viewType=view&branch_code='+brCd+'&groupType=BASE&reportLang=ENG&period=&leadNumDays=&prospectNumDays=&orderBy=&strBsnsDt='+bsnsDt+'&mod_cd=IFABX&user_id='+sharedProperties+'&prefFormat=PDF&locale=en_US');
                                                  window.open(url1+'/FABXRest/rest/IWealthDashboardRestService/getRMClientReport?formAction=GENERATE_REPORT&bsno='+baseNo+'&reportType='+t[0]+'&prtfliono='+portNo+'&fromDate='+u+'&toDate='+bsnsDt+'&transType=null&benchMark=NSE%2Csadfsafd&Goal=null&reportName=REP11&viewType=view&branch_code='+brCd+'&groupType=BASE&reportLang=ENG&period=&leadNumDays=&prospectNumDays=&orderBy=&strBsnsDt='+bsnsDt+'&mod_cd=IFABX&user_id='+sharedProperties+'&prefFormat=PDF&locale=en_US');                                  
//var ref = cordova.InAppBrowser.open(url1+'/FABXRest/rest/IWealthPortalRestService/getRMClientReport?formAction=GENERATE_REPORT&bsno='+baseNo+'&reportType='+t[0]+'&prtfliono='+portNo+'&fromDate='+u+'&toDate='+bsnsDt+'&transType=null&benchMark=NSE%2Csadfsafd&Goal=null&reportName=REP11&viewType=view&branch_code='+brCd+'&groupType=BASE&reportLang=ENG&period=&leadNumDays=&prospectNumDays=&orderBy=&strBsnsDt='+bsnsDt+'&mod_cd=IFABX&user_id='+sharedProperties+'&prefFormat=PDF&locale=en_US', '_blank', 'location=no,presentationstyle=pagesheet,closebuttoncaption=Close');
                                                  

                       
					
					
                    };
				
					
                } 
				]);


    })();
