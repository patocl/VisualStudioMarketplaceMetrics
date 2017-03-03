//Set up the active tab to listen to for messages from popup.js 
chrome.runtime.onMessage.addListener(

    function (request, sender, popUpCallBackFn) {

        

        if (request.action === "requestDomFromVsmpPopUp") {

            //https://marketplace.visualstudio.com/manage
            //https://social.msdn.microsoft.com/profile/Greg%20Trevellick/extensions
            //NO
            //https://marketplace.visualstudio.com/subscriptions

            var typ = "";
            var href = window.location.href;
            switch (href) {
                case "http://marketplace.visualstudio.com/":
                case "https://marketplace.visualstudio.com/":
                    typ = "browse_Root";
                    break;
                case "http://marketplace.visualstudio.com/vs":
                case "https://marketplace.visualstudio.com/vs":
                    typ = "browse_VS";
                    break;
                case "http://marketplace.visualstudio.com/vsts":
                case "https://marketplace.visualstudio.com/vsts":
                    typ = "browse_VSTS";
                    break;
                case "http://marketplace.visualstudio.com/vscode":
                case "https://marketplace.visualstudio.com/vscode":
                    typ = "browse_VSCode";
                    break;
                default:
                    if (href.indexOf("marketplace.visualstudio.com/search") != -1) {
                        if (href.indexOf("&target=VS&") != -1) {
                            typ = "search_VS";
                        }
                        else {
                            if (href.indexOf("&target=VSCode&") != -1) {
                                typ = "search_VSCode";
                            }
                            else {
                                if (href.indexOf("&target=VSTS&") != -1) {
                                    typ = "search_VSTS";
                                }
                            }
                        }
                    }
                    else {
                        if (href.indexOf("https://social.msdn.microsoft.com/profile/") != -1) {
                            if (href.indexOf("/extensions") != -1) {
                                typ = "browse_ProfileExtensions";
                            }
                        }
                    }
                    break;
            }
            
            var vsmpDomJsonDataArray = new Array();

            if (typ == "search_VS" ||
                typ == "search_VSCode")
            {
                $("[class^=grid-item]").each(function () {
                    var installCountRounded = $(this).find('.install-count')[0].innerText;
                    var installCount = installCountRounded.replace("M", "000000").replace("K", "000").replace(".", "");//gregt 1.9M is not 19000000
                    var icon = $(this).find('.item-icon')[0].src;
                    var itemTitle = $(this).find('.item-title')[0].innerText;
                    var reviewTitle = $(this).find('.rating')[0].title;
                    var startReview = reviewTitle.indexOf('(') + 1;
                    var endReview = reviewTitle.indexOf(' ', startReview);
                    var reviewCount = reviewTitle.substring(startReview, endReview);
                    var publisher = $(this).find('.publisher')[0].innerText;
                    var price = $(this).find('.pricing-tag')[0].innerText;
                    var averageReviewFull = $(this).find('.rating')[0].title;
                    var averageReviewSplit = averageReviewFull.replace(" ", "").split(":");
                    var averageReviewNumberPlus = averageReviewSplit[1].split("(");
                    var averageReview = averageReviewNumberPlus[0];
                    var fullDescription = $(this).find('.description')[0].innerText;
                    var url = $(this).find('.gallery-item-card-container')[0].href;
                    var vsmpDomJsonData =
                    {
                        InstallCount: installCount,
                        Icon: icon,
                        ItemTitle: itemTitle,
                        ReviewCount: reviewCount,
                        Publisher: publisher,
                        Price: price,
                        AverageReview: averageReview,
                        FullDescription: fullDescription,
                        URL: url,
                    };
                    vsmpDomJsonDataArray.push(vsmpDomJsonData);
                });
            }

            if (typ == "browse_Root" ||
                typ == "browse_VS" ||
                typ == "browse_VSTS" ||
                typ == "browse_VSCode" ||
                typ == "search_VSTS")
            {
                $("[class^=gallery-item-card]").each(function () {
                    var installCountRounded = $(this).find('.install-count')[0].innerText;
                    var installCount = installCountRounded.replace("M", "000000").replace("K", "000").replace(".", "");//gregt 1.9M is not 19000000
                    var icon = $(this).find('.item-icon')[0].src;
                    var itemTitle = $(this).find('.item-title')[0].innerText;
                    var reviewTitle = "asadssa";//$(this).find('.rating')[0].title;
                    var startReview = "asadssa";//reviewTitle.indexOf('(') + 1;
                    var endReview = "asadssa";//reviewTitle.indexOf(' ', startReview);
                    var reviewCount = "asadssa";//reviewTitle.substring(startReview, endReview);
                    var publisher = $(this).find('.publisher')[0].innerText;
                    var price = $(this).find('.pricing-tag')[0].innerText;
                    var averageReviewFull = "asadssa";//$(this).find('.rating')[0].title;
                    var averageReviewSplit = "asadssa";//averageReviewFull.replace(" ", "").split(":");
                    var averageReviewNumberPlus = "asadssa";//averageReviewSplit[1].split("(");
                    var averageReview = "asadssa";//averageReviewNumberPlus[0];
                    var fullDescription = "asadssa";//$(this).find('.description')[0].innerText;
                    var url = "asadssa";//$(this).find('.gallery-item-card-container')[0].href;
                    var vsmpDomJsonData =
                    {
                        InstallCount: installCount,
                        Icon: icon,
                        ItemTitle: itemTitle,
                        ReviewCount: reviewCount,
                        Publisher: publisher,
                        Price: price,
                        AverageReview: averageReview,
                        FullDescription: fullDescription,
                        URL: url,
                    };
                    vsmpDomJsonDataArray.push(vsmpDomJsonData);
                });
            }

            if (typ == "browse_ProfileExtensions") {
                $("[class^=gallery-item-card]").each(function () {
                    var installCountRounded = "msdnProfExtn";//$(this).find('.install-count')[0].innerText;
                    var installCount = "msdnProfExtn";// installCountRounded.replace("M", "000000").replace("K", "000").replace(".", "");//gregt 1.9M is not 19000000
                    var icon = "msdnProfExtn";//$(this).find('.item-icon')[0].src;
                    var itemTitle = "msdnProfExtn";//$(this).find('.item-title')[0].innerText;
                    var reviewTitle = "msdnProfExtn";//"asadssa";//$(this).find('.rating')[0].title;
                    var startReview = "msdnProfExtn";//"asadssa";//reviewTitle.indexOf('(') + 1;
                    var endReview = "msdnProfExtn";//"asadssa";//reviewTitle.indexOf(' ', startReview);
                    var reviewCount = "msdnProfExtn";//"asadssa";//reviewTitle.substring(startReview, endReview);
                    var publisher = "msdnProfExtn";//$(this).find('.publisher')[0].innerText;
                    var price = "msdnProfExtn";//$(this).find('.pricing-tag')[0].innerText;
                    var averageReviewFull = "msdnProfExtn";//"asadssa";//$(this).find('.rating')[0].title;
                    var averageReviewSplit = "msdnProfExtn";//"asadssa";//averageReviewFull.replace(" ", "").split(":");
                    var averageReviewNumberPlus = "msdnProfExtn";//"asadssa";//averageReviewSplit[1].split("(");
                    var averageReview = "msdnProfExtn";//"asadssa";//averageReviewNumberPlus[0];
                    var fullDescription = "msdnProfExtn";//"asadssa";//$(this).find('.description')[0].innerText;
                    var url = "msdnProfExtn";//"asadssa";//$(this).find('.gallery-item-card-container')[0].href;
                    var vsmpDomJsonData =
                    {
                        InstallCount: installCount,
                        Icon: icon,
                        ItemTitle: itemTitle,
                        ReviewCount: reviewCount,
                        Publisher: publisher,
                        Price: price,
                        AverageReview: averageReview,
                        FullDescription: fullDescription,
                        URL: url,
                    };
                    vsmpDomJsonDataArray.push(vsmpDomJsonData);
                });
            }

            // Call the specified callback
            popUpCallBackFn(vsmpDomJsonDataArray);
        }
    }
);

chrome.runtime.sendMessage({ action: "openPopUp" });