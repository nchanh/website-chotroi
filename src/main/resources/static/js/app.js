var app = angular.module("myApp", ['ngRoute', 'ui.bootstrap'])

.factory("posFactory", function($http) {
    var posFactory = {};
    var postingDetails = [];
    var postingDetails1 = [];
    var products = [];
    var postings = [];
    var postings2 = [];
    var postingsSaved = [];
    var postingsSaved3 = [];
    var postingsSaved2 = [];

    var quanHuyens = [];
    var tinhs = [];
    var xas = [];

    posFactory.getProductsType = function() {
        var promise = $http
            .get("/products-type/find-all")
            .then((respone) => {
                products = respone.data;
                return products;
            })
            .catch((reason) => console.log(reason));
        return promise;
    };

    posFactory.getProducts = function() {
        var promise = $http
            .get("/products/find-all")
            .then((respone) => {
                products = respone.data;
                return products;
            })
            .catch((reason) => console.log(reason));
        return promise;
    };

    posFactory.getPostingDetails = function(url) {
        var promise = $http
            .get("/postingdetails/" + url)
            .then((respone) => {
                postingDetails = respone.data;
                return postingDetails;
            })
            .catch((reason) => console.log(reason));
        return promise;
    };

    posFactory.getPostingDetail = function(id) {
        var promise = $http
            .get('/' + id + '/get-postingdetail')
            .then((respone) => {
                postingDetails = respone.data;
                return postingDetails;
            })
            .catch((reason) => console.log(reason));
        return promise;
    };

    posFactory.getPostingsByProductID = function(id) {
        var promise = $http
            .get('/postings/' + id + '/find-by-product')
            .then((respone) => {
                postings = respone.data;
                return postings;
            })
            .catch((reason) => console.log(reason));
        return promise;
    };

    posFactory.getPostingsByUser = function(id) {
        var promise = $http
            .get('/postings/' + id + '/find-by-user')
            .then((respone) => {
                postings = respone.data;
                return postings;
            })
            .catch((reason) => console.log(reason));
        return promise;
    };

    posFactory.getPostingsTop31SortDate = function() {
        var promise = $http
            .get('/postings/find-top31-sort-date')
            .then((respone) => {
                postings = respone.data;
                return postings;
            })
            .catch((reason) => console.log(reason));
        return promise;
    };

    posFactory.getPostingDetailsByProduct = function(url) {
        var promise = $http
            .get("/postings-detail-by-product/" + url)
            .then((respone) => {
                postingDetails = respone.data;
                return postingDetails;
            })
            .catch((reason) => console.log(reason));
        return promise;
    };

    posFactory.getPostingDetailsByProductType = function(url) {
        var promise = $http
            .get("/postings-detail-by-product-type/" + url)
            .then((respone) => {
                postingDetails = respone.data;
                return postingDetails;
            })
            .catch((reason) => console.log(reason));
        return promise;
    };

    posFactory.getQuanHuyen = function() {
        var promise = $http
            .get('/json/quan_huyen.json')
            .then((respone) => {
                quanHuyens = respone.data;
                return quanHuyens;
            })
            .catch((reason) => console.log(reason));
        return promise;
    };

    posFactory.getTinh = function() {
        var promise = $http
            .get('/json/tinh_tp.json')
            .then((respone) => {
                tinhs = respone.data;
                return tinhs;
            })
            .catch((reason) => console.log(reason));
        return promise;
    };

    posFactory.getXa = function() {
        var promise = $http
            .get('/json/xa_phuong.json')
            .then((respone) => {
                xas = respone.data;
                return xas;
            })
            .catch((reason) => console.log(reason));
        return promise;
    };

    posFactory.getPostingSaved = function() {
        var promise = $http
            .get('/posting-saved/find-all')
            .then((respone) => {
                postingsSaved3 = respone.data;
                return postingsSaved3;
            })
            .catch((reason) => console.log(reason));
        return promise;
    }

    posFactory.getPostingsByUsername = function(username) {
        var promise = $http
            .get('/postings-by-username/' + username)
            .then((respone) => {
                postings2 = respone.data;
                return postings2;
            })
            .catch((reason) => console.log(reason));
        return promise;
    }

    posFactory.getPostinsgSavedByUsername = function(username) {
        var promise = $http
            .get('/postingssaved-by-username/' + username)
            .then((respone) => {
                postingsSaved2 = respone.data;
                return postingsSaved2;
            })
            .catch((reason) => console.log(reason));
        return promise;
    }

    posFactory.getPostingsSoldByUserId = function(id) {
        var promise = $http
            .get("/postings/list-sold/" + id)
            .then((respone) => {
                postings = respone.data;
                return postings;
            })
            .catch((reason) => console.log(reason));
        return promise;
    };

    posFactory.getPostingsApprovedByUserId = function(id) {
        var promise = $http
            .get("/postings/list-approved/" + id)
            .then((respone) => {
                postings = respone.data;
                return postings;
            })
            .catch((reason) => console.log(reason));
        return promise;
    };

    posFactory.getPostingsUnapprovedByUserId = function(id) {
        var promise = $http
            .get("/postings/list-unapproved/" + id)
            .then((respone) => {
                postings = respone.data;
                return postings;
            })
            .catch((reason) => console.log(reason));
        return promise;
    };

    posFactory.getPostingsBlockByUserId = function(id) {
        var promise = $http
            .get("/postings/list-block/" + id)
            .then((respone) => {
                postings = respone.data;
                return postings;
            })
            .catch((reason) => console.log(reason));
        return promise;
    };

    posFactory.updateStatusSoldPosting = function(id) {
        var promise = $http
            .put("http://localhost:8080/postings/" + id + "/set-sold")
            .then((respone) => {
                posting = respone.data;
                return posting;
            })
            .catch((reason) => console.log(reason));
        return promise;
    };

    posFactory.getPosting = function(id) {
        var promise = $http
            .get("/postings/" + id + "/get")
            .then((respone) => {
                posting = respone.data;
                return posting;
            })
            .catch((reason) => console.log(reason));
        return promise;
    };

    posFactory.getPostingDetailsByAddress = function(address, url, url2) {
        var promise = $http
            .get("/postingsdetail-by-address/" + address + "/" + url + "/" + url2)
            .then((respone) => {
                postingDetails1 = respone.data;
                return postingDetails1;
            })
            .catch((reason) => console.log(reason));
        return promise;
    };

    posFactory.reportPostingDetail = function(report, postingDetailId) {
        var promise = $http
            .get("/report/" + report + "&" + postingDetailId)
            .catch((reason) => console.log(reason));
        return promise;
    };
    return posFactory;
})

.controller("posting", ["$scope", "$http", "$window", "posFactory",
    function($scope, $http, $window, posFactory) {

        $scope.tinhs = [];
        $scope.quanHuyens = [];
        $scope.xas = [];

        $scope.listQuanHuyen = [];
        $scope.listXa = [];

        $scope.indexQuan = '';
        $scope.indexXa = '';

        $scope.list_product = [];
        $scope.error = false;

        posFactory.getProductsType().then(
            data => {
                $scope.list_product = data;
            }, reason => {
                console.log(reason);
            }
        );

        $scope.search = function() {
            $window.location.href = "/search?keyword=" + $scope.keyword;
        };

        $scope.showval = true;
        $scope.hideval = false;
        $scope.isShowHide = function(param) {
            if (param == "show") {
                $scope.showval = true;
                $scope.hideval = true;
            } else if (param == "hide") {
                $scope.showval = false;
                $scope.hideval = false;
            } else {
                $scope.showval = true;
                $scope.hideval = false;
            }
        };

        posFactory.getTinh().then(
            data => {
                $scope.tinhs = data;
            }, reason => {
                console.log(reason);
            }
        );

        posFactory.getQuanHuyen().then(
            data => {
                $scope.quanHuyens = data;
            }, reason => {
                console.log(reason);
            }
        );

        posFactory.getXa().then(
            data => {
                $scope.xas = data;
            }, reason => {
                console.log(reason);
            }
        );

        $scope.selectTinh = function() {

            if ($scope.tinhSelect == null) {
                $scope.indexQuan = '';
                $scope.indexXa = '';
                if ($scope.xaSelect != null) {
                    $scope.xaSelect.name_with_type = '';
                }
                if ($scope.huyenSelect != null) {
                    $scope.huyenSelect.name_with_type = '';
                }
            }

            if ($scope.tinhSelect != null) {
                $scope.indexQuan = $scope.tinhSelect.name;
                $scope.listQuanHuyen = [];
                for (const i in $scope.quanHuyens) {
                    var parent_code = $scope.quanHuyens[i].parent_code;
                    if (parent_code == $scope.tinhSelect.code) {
                        $scope.listQuanHuyen.push($scope.quanHuyens[i]);
                    }
                }
            }

        };

        $scope.selectHuyen = function() {

            if ($scope.huyenSelect == null) {
                $scope.indexXa = '';

                if ($scope.xaSelect != null) {
                    $scope.xaSelect.name_with_type = '';
                }
                if ($scope.huyenSelect != null) {
                    $scope.huyenSelect.name_with_type = '';
                }

            }

            if ($scope.huyenSelect != null) {
                $scope.indexXa = $scope.huyenSelect.name;
                $scope.listXa = [];
                for (const i in $scope.xas) {
                    var parent_code = $scope.xas[i].parent_code;
                    if (parent_code == $scope.huyenSelect.code) {
                        $scope.listXa.push($scope.xas[i]);
                    }
                }
            }
        };

    }
])

.controller("postingDetails", ["$scope", "$http", "$window", "posFactory", "$uibModal",
    function($scope, $http, $window, posFactory) {
        $scope.list_postingDetals = [];
        $scope.postingSaveds = [];
        $scope.postings = [];

        $scope.usernameLogin = document.getElementsByName("usernameLogin")[0].value;
        $scope.setPostingSave = false;

        $scope.product = "Danh mục";
        $scope.keyword = "";

        $scope.xa = '';
        $scope.huyen = '';
        $scope.tinh = '';

        $scope.isDisabled = true;

        // Table & Pagination
        // PAGINATION
        $scope.currentPage = 1;
        $scope.itemsPerPage = 10;

        var url = window.location.href;
        var arr = url.split("/");
        var resultUrl = arr[3];

        $scope.url = resultUrl;
        $scope.url2 = arr[4];
        
        posFactory.getProductsType().then(
            data => {
                $scope.products = data;
            }, reason => {
                console.log(reason);
            }
        )

        if (resultUrl == "loai-danh-muc") {
            posFactory.getPostingDetailsByProductType(arr[4]).then(
                data => {
                    $scope.list_postingDetals = data;
                    if (data.length != 0) {
                        $scope.product = data[0].posting.product.postings.name;
                        $scope.keyword = data[0].posting.product.postings.name;
                    } else {
                        for (const i in $scope.products) {
                            var id = arr[4].substr(10);
                            if (id == $scope.products[i].id) {
                                $scope.product = $scope.products[i].name;
                            }
                        }
                    }
                }, reason => {
                    console.log(reason);
                }
            )
        } else if (resultUrl == "danh-muc") {
            posFactory.getPostingDetailsByProduct(arr[4]).then(
                data => {
                    $scope.list_postingDetals = data;
                    if (data.length != 0) {
                        $scope.product = data[0].posting.product.name;
                        $scope.keyword = data[0].posting.product.name;
                    } else {
                        for (const i in $scope.products) {
                            for (const j in $scope.products[i].products) {
                                var id = arr[4].substr(10);
                                if (id == $scope.products[i].products[j].id) {
                                    $scope.product = $scope.products[i].products[j].name;
                                }
                            }
                        }
                    }
                }, reason => {
                    console.log(reason);
                }
            )
        } else {
            posFactory.getPostingDetails(resultUrl).then(
                data => {
                    $scope.list_postingDetals = data;
                    $scope.keyword = resultUrl.substr(15);
                }, reason => {
                    console.log(reason);
                }
            )
        }

        $scope.load = function() {
            if (resultUrl == "loai-danh-muc") {
                posFactory.getPostingDetailsByProductType(arr[4]).then(
                    data => {
                        $scope.list_postingDetals = data;
                        if (data.length != 0) {
                            $scope.product = data[0].posting.product.postings.name;
                            $scope.keyword = data[0].posting.product.postings.name;
                        } else {
                            for (const i in $scope.products) {
                                var id = arr[4].substr(10);
                                if (id == $scope.products[i].id) {
                                    $scope.product = $scope.products[i].name;
                                }
                            }
                        }
                    }, reason => {
                        console.log(reason);
                    }
                )
            } else if (resultUrl == "danh-muc") {
                posFactory.getPostingDetailsByProduct(arr[4]).then(
                    data => {
                        $scope.list_postingDetals = data;
                        if (data.length != 0) {
                            $scope.product = data[0].posting.product.name;
                            $scope.keyword = data[0].posting.product.name;
                        } else {
                            for (const i in $scope.products) {
                                for (const j in $scope.products[i].products) {
                                    var id = arr[4].substr(10);
                                    if (id == $scope.products[i].products[j].id) {
                                        $scope.product = $scope.products[i].products[j].name;
                                    }
                                }
                            }
                        }
                    }, reason => {
                        console.log(reason);
                    }
                )
            } else {
                posFactory.getPostingDetails(resultUrl).then(
                    data => {
                        $scope.list_postingDetals = data;
                        $scope.keyword = resultUrl.substr(15);
                    }, reason => {
                        console.log(reason);
                    }
                )
            }
        }

        posFactory.getPostingSaved().then(
            data => {
                for (const i in data) {
                    if (data[i].assessor == $scope.usernameLogin) {
                        $scope.postingSaveds.push(data[i]);
                    }
                }
            }, reason => {
                console.log(reason);
            }
        )

        posFactory.getTinh().then(
            data => {
                $scope.tinhs = data;
            }, reason => {
                console.log(reason);
            }
        );

        posFactory.getQuanHuyen().then(
            data => {
                $scope.quanHuyens = data;
            }, reason => {
                console.log(reason);
            }
        );

        posFactory.getXa().then(
            data => {
                $scope.xas = data;
            }, reason => {
                console.log(reason);
            }
        );

        $scope.selectTinh = function() {
            if ($scope.tinhSelect == null) {
                $scope.addressSelect = '';
                if ($scope.xaSelect != null) {
                    $scope.listXa = [];
                    $scope.xaSelect.name_with_type = '';
                }
                if ($scope.huyenSelect != null) {
                    $scope.listQuanHuyen = [];
                    $scope.huyenSelect.name_with_type = '';
                }
            }

            if ($scope.tinhSelect != null) {
                $scope.listQuanHuyen = [];
                $scope.listXa = [];
                $scope.addressSelect = $scope.tinhSelect.name_with_type;
                for (const i in $scope.quanHuyens) {
                    var parent_code = $scope.quanHuyens[i].parent_code;
                    if (parent_code == $scope.tinhSelect.code) {
                        $scope.listQuanHuyen.push($scope.quanHuyens[i]);
                    }
                }
            }

        };

        $scope.selectHuyen = function() {

            if ($scope.huyenSelect == null) {
                $scope.addressSelect = $scope.tinhSelect.name_with_type;
                if ($scope.xaSelect != null) {
                    $scope.listXa = [];
                    $scope.xaSelect.name_with_type = '';
                }
                if ($scope.huyenSelect != null) {
                    $scope.listQuanHuyen = [];
                    $scope.huyenSelect.name_with_type = '';
                }

            }

            if ($scope.huyenSelect != null) {
                $scope.listXa = [];
                $scope.addressSelect = $scope.huyenSelect.name_with_type + ', ' + $scope.tinhSelect.name_with_type;
                for (const i in $scope.xas) {
                    var parent_code = $scope.xas[i].parent_code;
                    if (parent_code == $scope.huyenSelect.code) {
                        $scope.listXa.push($scope.xas[i]);
                    }
                }
            }
        };

        $scope.selectXa = function() {

            if ($scope.xaSelect == null) {
                if ($scope.xaSelect != null) {
                    $scope.addressSelect = $scope.xaSelect.name_with_type + ', ' + $scope.huyenSelect.name_with_type + ', ' + $scope.tinhSelect.name_with_type;
                }
            }

            if ($scope.xaSelect != null) {
                $scope.addressSelect = $scope.xaSelect.name_with_type + ', ' + $scope.huyenSelect.name_with_type + ', ' + $scope.tinhSelect.name_with_type;
            }
        };

        $scope.checkButtonSave = function(id) {
            for (const i in $scope.postingSaveds) {
                if ($scope.postingSaveds[i].postingID == id) {
                    return true;
                }
            }
            return false;
        }

        $scope.postingSave = function() {
            $scope.isDisabled = false;
        }

        $scope.goPostingDetail = function(id) {
            if ($scope.isDisabled === true) {
                $window.location.href = "/" + id;
            }
        }

        $scope.min = 0;
        $scope.max = 0;

        $scope.filter = function(min, max) {
            min = min.replace(/,/g, "");
            max = max.replace(/,/g, "");

            if (min == 0 && max == 0) {
                if (resultUrl == "loai-danh-muc") {
                    posFactory.getPostingDetailsByProductType(arr[4]).then(
                        data => {
                            $scope.list_postingDetals = data;
                            if (data.length != 0) {
                                $scope.product = data[0].posting.product.postings.name;
                                $scope.keyword = data[0].posting.product.postings.name;
                            } else {
                                for (const i in $scope.products) {
                                    var id = arr[4].substr(10);
                                    if (id == $scope.products[i].id) {
                                        $scope.product = $scope.products[i].name;
                                    }
                                }
                                $scope.list_postingDetals2 = $scope.list_postingDetals;
                                $scope.list_postingDetals = [];
                                for (const i in $scope.list_postingDetals2) {
                                    if (min <= $scope.list_postingDetals2[i].price && $scope.list_postingDetals2[i].price <= max) {
                                        $scope.list_postingDetals.push($scope.list_postingDetals2[i]);
                                    }
                                }
                            }
                        }, reason => {
                            console.log(reason);
                        }
                    )
                } else if (resultUrl == "danh-muc") {
                    posFactory.getPostingDetailsByProduct(arr[4]).then(
                        data => {
                            $scope.list_postingDetals = data;
                            if (data.length != 0) {
                                $scope.product = data[0].posting.product.name;
                                $scope.keyword = data[0].posting.product.name;
                            } else {
                                for (const i in $scope.products) {
                                    for (const j in $scope.products[i].products) {
                                        var id = arr[4].substr(10);
                                        if (id == $scope.products[i].products[j].id) {
                                            $scope.product = $scope.products[i].products[j].name;
                                        }
                                    }
                                }
                                $scope.list_postingDetals2 = $scope.list_postingDetals;
                                $scope.list_postingDetals = [];
                                for (const i in $scope.list_postingDetals2) {
                                    if (min <= $scope.list_postingDetals2[i].price && $scope.list_postingDetals2[i].price <= max) {
                                        $scope.list_postingDetals.push($scope.list_postingDetals2[i]);
                                    }
                                }
                            }
                        }, reason => {
                            console.log(reason);
                        }
                    )
                } else {
                    posFactory.getPostingDetails(resultUrl).then(
                        data => {
                            $scope.list_postingDetals = data;
                            $scope.keyword = resultUrl.substr(15);
                            $scope.list_postingDetals2 = $scope.list_postingDetals;
                            $scope.list_postingDetals = [];
                            for (const i in $scope.list_postingDetals2) {
                                if (min <= $scope.list_postingDetals2[i].price && $scope.list_postingDetals2[i].price <= max) {
                                    $scope.list_postingDetals.push($scope.list_postingDetals2[i]);
                                }
                            }
                        }, reason => {
                            console.log(reason);
                        }
                    )
                }
            } else {
                $scope.list_postingDetals2 = $scope.list_postingDetals;
                $scope.list_postingDetals = [];
                for (const i in $scope.list_postingDetals2) {
                    if (min <= $scope.list_postingDetals2[i].price && $scope.list_postingDetals2[i].price <= max) {
                        $scope.list_postingDetals.push($scope.list_postingDetals2[i]);
                        console.log(i);
                        console.log($scope.list_postingDetals2[i].address);
                        console.log($scope.list_postingDetals2[0].posting.type);
                    }
                }
            }

        }

        $scope.sortBy = function(propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
        }

        $scope.searchAddress = function() {
            if ($scope.addressSelect == '') {
                $scope.load();
            }
            if (resultUrl == "loai-danh-muc") {
                   posFactory.getPostingDetailsByAddress($scope.addressSelect, $scope.url, $scope.url2).then(
	                data => {
	                    $scope.list_postingDetals = data;
	                }, reason => {
	                    console.log(reason);
	                }
            )
            } else if (resultUrl == "danh-muc") {
                   posFactory.getPostingDetailsByAddress($scope.addressSelect, $scope.url, $scope.url2).then(
                data => {
                    $scope.list_postingDetals = data;
                }, reason => {
                    console.log(reason);
                }
            )
            } else {
                       posFactory.getPostingDetailsByAddress($scope.addressSelect, 'aaaa', $scope.url).then(
                data => {
                    $scope.list_postingDetals = data;
                }, reason => {
                    console.log(reason);
                }
            )                
                }
            
            }
          

        $scope.filteruser = function() {
            if ($scope.list_postingDetals.length == 0) {
                $scope.load();
            }
            $scope.list_postingDetals2 = $scope.list_postingDetals;
            $scope.list_postingDetals = [];
            for (const i in $scope.list_postingDetals2) {
                if ($scope.list_postingDetals2[i].posting.user != null) {
                    $scope.list_postingDetals.push($scope.list_postingDetals2[i]);
                }
            }
        }
        $scope.filtershop = function() {
            if ($scope.list_postingDetals.length == 0) {
                $scope.load();
            }
            $scope.list_postingDetals2 = $scope.list_postingDetals;
            $scope.list_postingDetals = [];
            for (const i in $scope.list_postingDetals2) {
                if ($scope.list_postingDetals2[i].posting.shop != null) {
                    $scope.list_postingDetals.push($scope.list_postingDetals2[i]);
                }
            }
        }
        $scope.filterBan = function() {
            if ($scope.list_postingDetals.length == 0) {
                $scope.load();
            }
            $scope.list_postingDetals2 = $scope.list_postingDetals;
            $scope.list_postingDetals = [];
            for (const i in $scope.list_postingDetals2) {
                if ($scope.list_postingDetals2[i].posting.type === false) {
                    $scope.list_postingDetals.push($scope.list_postingDetals2[i]);
                }
            }
        }
        $scope.filterMua = function() {
            if ($scope.list_postingDetals.length == 0) {
                $scope.load();
            }
            $scope.list_postingDetals2 = $scope.list_postingDetals;
            $scope.list_postingDetals = [];
            for (const i in $scope.list_postingDetals2) {
                if ($scope.list_postingDetals2[i].posting.type === true) {
                    $scope.list_postingDetals.push($scope.list_postingDetals2[i]);
                }
            }
        }

    }
])

.controller("postingDetail", ["$scope", "$http", "$window", "posFactory",
        function($scope, $http, $window, posFactory) {
            $scope.postingdetail = {};
            $scope.postingsByUser = [];
            $scope.products = [];

            $scope.usernameLogin = document.getElementsByName("usernameLogin")[0].value;
            $scope.setPostingSave = false;

            var url = window.location.href;
            var arr = url.split("/");
            var resultUrl = arr[3];
            $scope.url = resultUrl;
            var numsStr = resultUrl.replace(/[^0-9]/g, '');

            posFactory.getPostingDetail(numsStr).then(
                data => {
                    $scope.postingdetail = data;
                    $scope.getPostings($scope.postingdetail.posting.product.id);
                    if ($scope.postingdetail.posting.user != null) {
                        $scope.getPostingsByUser($scope.postingdetail.posting.user.id);
                    }

                    if ($scope.postingdetail.posting.shop != null) {
                        $scope.getPostingsByUser($scope.postingdetail.posting.shop.id);
                    }

                },
                reason => {
                    console.log(reason);
                }
            )

            posFactory.getPostingSaved().then(
                data => {
                    $scope.postingSaveds = [];
                    for (const i in data) {
                        if (data[i].assessor == $scope.usernameLogin) {
                            $scope.postingSaveds.push(data[i]);
                        }
                    }
                }, reason => {
                    console.log(reason);
                }
            )

            $scope.checkButtonSave = function(id) {
                for (const i in $scope.postingSaveds) {
                    if ($scope.postingSaveds[i].postingID == id) {
                        return true;
                    }
                }
                return false;
            }

            $scope.getPostings = function(id) {
                posFactory.getPostingsByProductID(id).then(
                    data => {
                        $scope.postings = data;
                    }, reason => {
                        console.log(reason);
                    }
                )
            }

            $scope.getPostingsByUser = function(id) {
                posFactory.getPostingsByUser(id).then(
                    data => {
                        $scope.postingsByUser = data;
                    }, reason => {
                        console.log(reason);
                    }
                )
            }

            $scope.goPostingDetail = function(id) {
                $window.location.href = "/" + id;
            }

            $scope.reportPostingDetail = function(report) {
                posFactory.reportPostingDetail(report, numsStr)
                    .then(alert('Đã gửi báo cáo thành công!'))
                    .catch(reason => console.log(reason));
            }

        }
    ])
    .controller('indexCtrl', ["$scope", "$http", "$window", "posFactory",
        function($scope, $http, $window, posFactory) {

            $scope.postings = [];
            $scope.productsType = [];

            posFactory.getPostingsTop31SortDate().then(
                data => {
                    $scope.postings = data;
                }, reason => {
                    console.log(reason);
                }
            )

            posFactory.getProductsType().then(
                data => {
                    $scope.productsType = data;
                }, reason => {
                    console.log(reason);
                }
            );

            $scope.goPostingDetail = function(id) {
                console.log('/' + id);
                $window.location.href = "/" + id;
            }

        }
    ])
    .controller('profileCtrl', ["$scope", "$http", "$window", "posFactory",
        function($scope, $http, $window, posFactory) {

            $scope.postings = [];
            $scope.productsType = [];
            $scope.products = [];
            $scope.products2 = [];
            $scope.postingsSold = [];
            $scope.postingsApproved = [];
            $scope.postingsUnapproved = [];
            $scope.postingsBlock = [];
            $scope.postingsSaved = [];
            $scope.tinhs = [];
            $scope.quanHuyens = [];
            $scope.xas = [];
            $scope.listQuanHuyen = [];
            $scope.listXa = [];
            $scope.postingShow = {};

            $scope.isDisabled = true;
            $scope.addressStatus = true;

            $scope.usernameLogin = document.getElementsByName("usernameLogin")[0].value;
            $scope.usernamePostingDetail = "";

            // Table & Pagination
            // PAGINATION
            $scope.currentPage0 = 1;
            $scope.itemsPerPage0 = 3;
            $scope.currentPage1 = 1;
            $scope.itemsPerPage1 = 3;
            $scope.currentPage2 = 1;
            $scope.itemsPerPage2 = 5;
            $scope.currentPage3 = 1;
            $scope.itemsPerPage3 = 3;
            $scope.currentPage4 = 1;
            $scope.itemsPerPage4 = 3;

            var url = window.location.href;
            var arr = url.split("/");
            var id = arr[3];
            $scope.url = arr[3] + '/' + arr[4];

            posFactory.getPostingsByUser(id).then(
                data => {
                    $scope.postings = data;
                    if (data.length != 0) {
                        if ($scope.postings[0].user != null) {
                            $scope.usernamePostingDetail = $scope.postings[0].user.username;
                        }
                        if ($scope.postings[0].shop != null) {
                            $scope.usernamePostingDetail = $scope.postings[0].shop.username;
                        }
                    }
                }, reason => {
                    console.log(reason);
                }
            )

            posFactory.getPostingsApprovedByUserId(id).then(
                data => {
                    $scope.postingsApproved = data;
                    if (data.length != 0) {
                        if ($scope.postings[0].user != null) {
                            $scope.usernamePostingDetail = $scope.postings[0].user.username;
                        }
                        if ($scope.postings[0].shop != null) {
                            $scope.usernamePostingDetail = $scope.postings[0].shop.username;
                        }
                    }
                }, reason => {
                    console.log(reason);
                }
            )

            posFactory.getPostingsSoldByUserId(id).then(
                data => {
                    $scope.postingsSold = data;
                }, reason => {
                    console.log(reason);
                }
            )

            posFactory.getPostingsUnapprovedByUserId(id).then(
                data => {
                    $scope.postingsUnapproved = data;
                    if (data.length != 0) {
                        if ($scope.postingsUnapproved[0].user != null) {
                            $scope.usernamePostingDetail = $scope.postingsUnapproved[0].user.username;
                        }
                        if ($scope.postingsUnapproved[0].shop != null) {
                            $scope.usernamePostingDetail = $scope.postingsUnapproved[0].shop.username;
                        }
                    }
                }, reason => {
                    console.log(reason);
                }
            )

            posFactory.getPostingsBlockByUserId(id).then(
                data => {
                    $scope.postingsBlock = data;
                    if (data.length != 0) {
                        if ($scope.postingsBlock[0].user != null) {
                            $scope.usernamePostingDetail = $scope.postingsBlock[0].user.username;
                        }
                        if ($scope.postingsBlock[0].shop != null) {
                            $scope.usernamePostingDetail = $scope.postingsBlock[0].shop.username;
                        }
                    }
                }, reason => {
                    console.log(reason);
                }
            )

            posFactory.getPostingsByUsername($scope.usernameLogin).then(
                data => {
                    $scope.postings2 = data;
                }, reason => {
                    console.log(reason);
                }
            )

            posFactory.getPostinsgSavedByUsername($scope.usernameLogin).then(
                data => {
                    $scope.postingsSaved = data;
                }, reason => {
                    console.log(reason);
                }
            )

            posFactory.getProductsType().then(
                data => {
                    $scope.productsType = data;
                }, reason => {
                    console.log(reason);
                }
            )

            $scope.postingSave = function() {
                $scope.isDisabled = false;
            }

            $scope.updateStatusPosting = function(id) {
                posFactory.updateStatusSoldPosting(id).then(
                    data => {
                        location.reload();
                    }, reason => { console.log(reason) }
                )
            }

            $scope.getPosting = function(id) {
                if ($scope.isDisabled === true) {
                    posFactory.getPosting(id).then(
                        data => {
                            $scope.postingShow = data;
                        },
                        reason => {
                            console.log(reason);
                        }
                    );
                }
            };

            $scope.getPostingUpdate = function(id) {
                if ($scope.isDisabled = false) {
                    $scope.isDisabled = true;
                } else {
                    $scope.isDisabled = false;
                }
                posFactory.getPosting(id).then(
                    data => {
                        $scope.postingShow = data;
                        $scope.productName = $scope.postingShow.product.name;
                        $scope.addressName = $scope.postingShow.postings[0].address;
                    },
                    reason => {
                        console.log(reason);
                    }
                );

            }

            $scope.selectProductType = function() {
                if ($scope.productTypeSelect == null) {
                    $scope.products = [];
                    $scope.productName = $scope.postingShow.product.name;
                }

                if ($scope.productTypeSelect != null) {
                    for (const i in $scope.productsType) {
                        var name = $scope.productsType[i].name;
                        if (name == $scope.productTypeSelect.name) {
                            $scope.products = $scope.productsType[i].products;
                        }
                    }
                }
            }

            $scope.selectProduct = function() {
                if ($scope.productSelect == null) {
                    $scope.productName = '';
                    $scope.productName = $scope.postingShow.product.name;
                }

                if ($scope.productSelect != null) {
                    $scope.productName = $scope.productSelect.name
                }
            }

            posFactory.getTinh().then(
                data => {
                    $scope.tinhs = data;
                }, reason => {
                    console.log(reason);
                }
            );

            posFactory.getQuanHuyen().then(
                data => {
                    $scope.quanHuyens = data;
                }, reason => {
                    console.log(reason);
                }
            );

            posFactory.getXa().then(
                data => {
                    $scope.xas = data;
                }, reason => {
                    console.log(reason);
                }
            );

            $scope.selectTinh = function() {

                if ($scope.tinhSelect == null) {
                    $scope.addressStatus = true;
                    if ($scope.xaSelect != null) {
                        $scope.listXa = [];
                        $scope.xaSelect.name_with_type = '';
                    }
                    if ($scope.huyenSelect != null) {
                        $scope.listQuanHuyen = [];
                        $scope.huyenSelect.name_with_type = '';
                    }
                }

                if ($scope.tinhSelect != null) {
                    $scope.addressStatus = false;
                    $scope.listQuanHuyen = [];
                    for (const i in $scope.quanHuyens) {
                        var parent_code = $scope.quanHuyens[i].parent_code;
                        if (parent_code == $scope.tinhSelect.code) {
                            $scope.listQuanHuyen.push($scope.quanHuyens[i]);
                        }
                    }
                }

            };

            $scope.selectHuyen = function() {

                if ($scope.huyenSelect == null) {
                    if ($scope.xaSelect != null) {
                        $scope.listXa = [];
                        $scope.xaSelect.name_with_type = '';
                    }
                    if ($scope.huyenSelect != null) {
                        $scope.listQuanHuyen = [];
                        $scope.huyenSelect.name_with_type = '';
                    }
                }

                if ($scope.huyenSelect != null) {
                    $scope.listXa = [];
                    for (const i in $scope.xas) {
                        var parent_code = $scope.xas[i].parent_code;
                        if (parent_code == $scope.huyenSelect.code) {
                            $scope.listXa.push($scope.xas[i]);
                        }
                    }
                }
            };

            $scope.goPostingDetail = function(id) {
                if ($scope.isDisabled === true) {
                    $window.location.href = "/" + id;
                }
            }

        }
    ])
    .controller('setAddressCtrl', ["$scope", "posFactory",
        function($scope, posFactory) {

            $scope.tinhs = [];
            $scope.quanHuyens = [];
            $scope.xas = [];
            $scope.listQuanHuyen = [];
            $scope.listXa = [];

            $scope.addressStatus = true;

            posFactory.getTinh().then(
                data => {
                    $scope.tinhs = data;
                }, reason => {
                    console.log(reason);
                }
            );

            posFactory.getQuanHuyen().then(
                data => {
                    $scope.quanHuyens = data;
                }, reason => {
                    console.log(reason);
                }
            );

            posFactory.getXa().then(
                data => {
                    $scope.xas = data;
                }, reason => {
                    console.log(reason);
                }
            );

            $scope.selectTinh = function() {
                if ($scope.tinhSelect == null) {
                    $scope.addressStatus = true;
                    $scope.addressSelect = '';
                    if ($scope.xaSelect != null) {
                        $scope.listXa = [];
                        $scope.xaSelect.name_with_type = '';
                    }
                    if ($scope.huyenSelect != null) {
                        $scope.listQuanHuyen = [];
                        $scope.huyenSelect.name_with_type = '';
                    }
                }

                if ($scope.tinhSelect != null) {
                    $scope.addressStatus = false;
                    $scope.listQuanHuyen = [];
                    $scope.listXa = [];
                    $scope.addressSelect = $scope.tinhSelect.name_with_type;
                    for (const i in $scope.quanHuyens) {
                        var parent_code = $scope.quanHuyens[i].parent_code;
                        if (parent_code == $scope.tinhSelect.code) {
                            $scope.listQuanHuyen.push($scope.quanHuyens[i]);
                        }
                    }
                }

            };

            $scope.selectHuyen = function() {

                if ($scope.huyenSelect == null) {
                    $scope.addressSelect = $scope.tinhSelect.name_with_type;
                    if ($scope.xaSelect != null) {
                        $scope.listXa = [];
                        $scope.xaSelect.name_with_type = '';
                    }
                    if ($scope.huyenSelect != null) {
                        $scope.listQuanHuyen = [];
                        $scope.huyenSelect.name_with_type = '';
                    }

                }

                if ($scope.huyenSelect != null) {
                    $scope.listXa = [];
                    $scope.addressSelect = $scope.huyenSelect.name_with_type + ', ' + $scope.tinhSelect.name_with_type;
                    for (const i in $scope.xas) {
                        var parent_code = $scope.xas[i].parent_code;
                        if (parent_code == $scope.huyenSelect.code) {
                            $scope.listXa.push($scope.xas[i]);
                        }
                    }
                }
            };

            $scope.selectXa = function() {

                if ($scope.xaSelect == null) {
                    if ($scope.xaSelect != null) {
                        $scope.addressSelect = $scope.xaSelect.name_with_type + ', ' + $scope.huyenSelect.name_with_type + ', ' + $scope.tinhSelect.name_with_type;
                    }
                }

                if ($scope.xaSelect != null) {
                    $scope.addressSelect = $scope.xaSelect.name_with_type + ', ' + $scope.huyenSelect.name_with_type + ', ' + $scope.tinhSelect.name_with_type;
                }
            };

        }
    ])
    .directive("owlCarousel", function() {
        return {
            restrict: 'E',
            transclude: false,
            link: function(scope) {
                scope.initCarousel = function(element) {
                    // provide any default options you want
                    var defaultOptions = {};
                    var customOptions = scope.$eval($(element).attr('data-options'));
                    // combine the two options objects
                    for (var key in customOptions) {
                        defaultOptions[key] = customOptions[key];
                    }
                    defaultOptions['responsive'] = {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 2
                        },
                        1000: {
                            items: 5
                        }
                    };
                    // init carousel
                    var curOwl = $(element).data('owlCarousel');
                    if (!angular.isDefined(curOwl)) {
                        $(element).owlCarousel(defaultOptions);
                    }
                };
            }
        };
    })
    .directive('owlCarouselItem', [function() {
        return {
            restrict: 'A',
            transclude: false,
            link: function(scope, element) {
                // wait for the last item in the ng-repeat then call init
                if (scope.$last) {
                    scope.initCarousel(element.parent());
                }
            }
        };
    }])
    .directive('uibPagination', function() {
        return {
            restrict: 'A',
            require: 'uibPagination',
            link: function($scope, $element, $attr, uibPaginationCtrl) {
                uibPaginationCtrl.ShouldHighlightPage = function(currentPage) {
                    return true;
                };
            }
        }
    });