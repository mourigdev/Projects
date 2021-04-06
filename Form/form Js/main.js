        //=============== Print Certifacates==========
        $('ul#ListCer').on('click', function (e) {

            // e.preventDefault();
            var target = $(e.target);
            if (target.hasClass('butPrint')) {

                if (document.getElementById("yeh").style.display == "none") {
                    document.getElementById("yeh").style.display = "block";

                }

                document.getElementById("yeh").appendChild(target.closest('.cer')[0]);
                document.querySelector(".container").style.display = "none";
                window.print()
                let yes = document.getElementById('yeh').querySelector(".cer");

                document.getElementById("ListCer").appendChild(yes);
                console.log(yes)

                document.getElementById("yeh").style.display = "none";
                document.querySelector(".container").style.display = "flex";

                // location.reload();
            }
        })


        //======= PRint List Of Stagiers =========


        $('#printTable').on('click', function () {

            if (document.getElementById("yeh2").style.display == "none") {
                document.getElementById("yeh2").style.display = "block";

            }

            document.getElementById("yeh2").appendChild(document.getElementById("myTable"));
            document.querySelector(".container").style.display = "none";
            window.print();
            let yes2 = document.getElementById('yeh2').querySelector("#myTable");
            document.getElementById("tableCont").appendChild(yes2);
            document.getElementById("yeh2").style.display = "none";
            document.querySelector(".container").style.display = "flex";
        })


        // ============= Sign Up And Data Storage===========


        document.getElementById("buttonSous").addEventListener("click", function go() {


            var new_data = {
                nom: document.getElementById('nom').value,
                prenom: document.getElementById('prenom').value,
                dateofbirth: document.getElementById("birth").value,
                email: document.getElementById("email").value,
                password1: document.getElementById("password1").value,
                password2: document.getElementById("password2").value,
            }







            const ThisYear = new Date().getFullYear();
            const YourYear = new_data.dateofbirth[0] + new_data.dateofbirth[1] + new_data.dateofbirth[2] + new_data.dateofbirth[3]

            // console.log(nn-kk)


            if (new_data.nom !== "" && new_data.prenom !== "" && new_data.email !== "" && new_data.dateofbirth !==
                "" && new_data.password1 !== "" && new_data.password2 !== "") {

                var regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

                if ((new_data.email).match(regex)) {

                    if (new_data.password2 == new_data.password1 && new_data.password1.length >= 8) {



                        var m = 0;

                        if (localStorage.getItem('data') !== null) {
                            JSON.parse(localStorage.getItem('data')).forEach(element => {
                                if (element.email == new_data.email) {
                                    m = m + 1

                                }
                            })
                        }



                        if (m == 0) {

                            if (ThisYear - YourYear >= 18) {


                                if (localStorage.getItem('data') == null) {
                                    localStorage.setItem('data', '[]');
                                }

                                var old_data = JSON.parse(localStorage.getItem('data'));

                                old_data.unshift(new_data);

                                localStorage.setItem('data', JSON.stringify(old_data));

                                if (localStorage.getItem('data') != null) {
                                    console.log(JSON.parse(localStorage.getItem('data')))
                                }

                                xdialog.alert("Thanks For Your Inscription");
                                document.querySelector(".formContainer").style.display = "none";
                                document.querySelector(".checked1").style.backgroundColor = "#f3f3f9";
                                document.querySelector(".checked2").style.backgroundColor = "#0c75ff";
                                document.querySelector('.loginContainer').style.display = "block";

                            } else {
                                xdialog.alert("You Must Have at Least 18 year");
                            }


                        } else {
                            xdialog.alert("This email is Deja Regestred Please Sign In");
                        }




                    } else if (new_data.password2 !== new_data.password1 && new_data.password1.length < 8) {
                        xdialog.alert(`Password is Incorrect <br><br>and Password Must Contain at least 8 Digits`);
                    } else if (new_data.password2 !== new_data.password1 && new_data.password1.length >= 8) {
                        xdialog.alert(`Password is Incorrect`);
                    } else if (new_data.password2 == new_data.password1 && new_data.password1.length < 8) {
                        xdialog.alert(`Password Must Contain at least 8 Digits`);
                    }


                } else {
                    xdialog.alert(`Email Not Valid`);
                }





            } else {
                xdialog.alert("Oops! All Fields Are Required");
            }
        })



        document.getElementById("loginButton").addEventListener('click', () => {
            document.querySelector(".formContainer").style.display = "none";
            document.querySelector(".checked1").style.backgroundColor = "#f3f3f9";
            document.querySelector(".checked2").style.backgroundColor = "#0c75ff";
            document.querySelector('.loginContainer').style.display = "block";
            document.querySelector(".PasswordContainer").style.display = "none";
        })

        document.getElementById("signUpButton").addEventListener('click', () => {
            document.querySelector('.loginContainer').style.display = "none";
            document.querySelector(".checked2").style.backgroundColor = "#f3f3f9";
            document.querySelector(".checked1").style.backgroundColor = "#0c75ff";
            document.querySelector(".formContainer").style.display = "block";
            document.querySelector(".PasswordContainer").style.display = "none";
        })


        let x = 0

        document.getElementById("buttonSous2").addEventListener('click', () => {
            if (document.getElementById("passwordLoginInput").value !== "" && document.getElementById("emailLoginInput").value !== "") {


                if (JSON.parse(localStorage.getItem('data')) !== null) {


                    JSON.parse(localStorage.getItem('data')).forEach(element => {
                        if (element.password1 == document.getElementById("passwordLoginInput").value && element.email == document.getElementById("emailLoginInput").value) {
                            document.querySelector(".formContainer").style.display = "none";
                            document.querySelector('.loginContainer').style.display = "none";
                            document.querySelector('.but1').style.display = "none";
                            document.querySelector('.but2').style.display = "none";
                            document.querySelector('.but3').style.display = "flex";
                            document.querySelector('.but4').style.display = "flex";
                            document.querySelector(".checked3").style.backgroundColor = "#0c75ff";

                            // document.querySelector('.imgLeft').style.display = "block";
                            document.getElementById("logginHello").style.display = "block";
                            document.querySelector('.butLogOut').style.display = "block";

                            document.getElementById("logginHello").innerHTML += `${element.nom}`;

                            document.getElementById('tableCont').style.display = "block";
                            JSON.parse(localStorage.getItem('data')).forEach(element => {
                                document.getElementById("table1").innerHTML += `<td class="table1Elements">${element.nom}</td>`;
                                document.getElementById("table2").innerHTML += `<td>${element.prenom}</td>`;
                                document.getElementById("table3").innerHTML += `<td>${element.email}</td>`;




                            })


                        } else {
                            x = x + 1
                            if (x == JSON.parse(localStorage.getItem('data')).length) {
                                xdialog.alert("Password or Email is Incorect");
                                x = 0
                            }
                        }
                    })


                } else {
                    xdialog.alert("Password or Email is Incorect");
                }



            } else {
                xdialog.alert("Oops! All Fields Are Required");
            }


        })




        document.getElementById("CertificateButton").addEventListener('click', () => {

            if (document.getElementById('tableCont').style.display !== "none") {


                document.querySelector(".checked4").style.backgroundColor = "#0c75ff";

                document.querySelector(".checked3").style.backgroundColor = "#f3f3f9";

                document.getElementById('tableCont').style.display = "none";

                document.getElementById('ListCer').style.display = "block";

                if (document.querySelector(".cer") == undefined) {


                    JSON.parse(localStorage.getItem('data')).forEach(element => {
                        document.getElementById("ListCer").innerHTML += `<li class="cer"><br><a class="butPrint" id="printBut">Print</a><br><br><div class="container2">
                                <div class="logo">
                                    An Organization
                                </div>
        
                                <div class="marquee">
                                    Certificate of Completion
                                </div>
        
                                <div class="assignment">
                                    This certificate is presented to
                                </div>
        
                                <div class="person">
                                    ${element.nom}&nbsp;${element.prenom};
                                </div>
        
                                <div class="reason">
                                    For deftly defying the laws of gravity<br/>
                                    and flying high
                                </div>
                            </div></li>`
                    });
                }

            }



        })





        document.getElementById("ListStagiersButton").addEventListener('click', () => {
            document.getElementById("ListCer").style.display = "none";
            document.querySelector(".checked4").style.backgroundColor = "#f3f3f9";

            document.querySelector(".checked3").style.backgroundColor = "#0c75ff";
            document.getElementById('tableCont').style.display = "block";
        })




        document.getElementById("LogOutButton").addEventListener('click', () => {
            location.reload();
        })




        document.getElementById("forgetPassword").addEventListener("click", () => {
            document.querySelector(".loginContainer").style.display = "none";
            document.querySelector(".PasswordContainer").style.display = "block";
        })

        document.getElementById("returnToLogin").addEventListener("click", () => {
            document.querySelector(".PasswordContainer").style.display = "none";
            document.querySelector(".loginContainer").style.display = "block";
        })

        let birthCheck = document.getElementById("birthRecovery").value;
        let emailCheck = document.getElementById("emailRecovery").value;



        document.getElementById("buttonSous3").addEventListener("click", () => {


            var v = 0
            var d = 0

            JSON.parse(localStorage.getItem("data")).forEach(element => {

                if (document.getElementById("emailRecovery").value !== "" && document.getElementById("birthRecovery").value !== "") {

                    if (element.email == document.getElementById("emailRecovery").value && element.dateofbirth == document.getElementById("birthRecovery").value) {

                        d = d + 1
                        var old_data = JSON.parse(localStorage.getItem('data'));

                        document.querySelector(".PasswordContainer").style.display = "none";
                        document.querySelector(".PasswordContainer2").style.display = "block";


                        document.getElementById("buttonSous4").addEventListener("click", () => {

                            var Reseted_data = {
                                nom: element.nom,
                                prenom: element.prenom,
                                dateofbirth: element.dateofbirth,
                                email: element.email,
                                password1: document.getElementById("passwordNew").value,
                                password2: document.getElementById("passwordNew2").value,
                            }


                            if (Reseted_data.password2 !== "" && Reseted_data.password1 !== "") {



                                if ((Reseted_data.password2 == Reseted_data.password1) && (Reseted_data.password1.length >= 8)) {
                                    console.log("yes")

                                    let sss = JSON.parse(localStorage.getItem("data"))
                                    sss.pop(sss[d - 1])

                                    sss.unshift(Reseted_data);

                                    localStorage.setItem('data', JSON.stringify(sss));

                                    xdialog.alert("Password Has Been Reseted");

                                    document.querySelector(".PasswordContainer2").style.display = "none";
                                    document.querySelector(".loginContainer").style.display = "block";

                                } else {
                                    if (Reseted_data.password2 !== Reseted_data.password1 && Reseted_data.password1.length < 8) {
                                        xdialog.alert(`Password is Incorrect <br><br>and Password Must Contain at least 8 Digits`);
                                    } else if (Reseted_data.password2 !== Reseted_data.password1 && Reseted_data.password1.length >= 8) {
                                        xdialog.alert(`Password is Incorrect`);
                                    } else if (Reseted_data.password2 == Reseted_data.password1 && Reseted_data.password1.length < 8) {
                                        xdialog.alert(`Password Must Contain at least 8 Digits`);
                                    }
                                }

                            } else {
                                xdialog.alert("Oops! All Fields Are Required");
                            }

                        })






                    } else {
                        v = v + 1
                        if (v == JSON.parse(localStorage.getItem('data')).length) {
                            xdialog.alert("Email or Birth is Incorrect");
                        }

                    }

                } else {
                    xdialog.alert("Oops! All Fields Are Required");
                }
            })

        })




        // Detect Element Like Array
        // console.log(document.getElementById("table1").querySelectorAll(".table1Elements")[2])