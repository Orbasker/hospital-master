<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>login - Hospital Master</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <section class="bg-gray-50 ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900"><img class="w-18 h-12 mr-6" src="assets/svg/logo1.svg" alt="logo"></a>
            <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">Sign in to your account</h1>
                    <form class="space-y-4 md:space-y-6" action="#" method="post" id="login_form">
                        <div>
                            <label for="user_name" class="block mb-2 text-sm font-medium text-gray-900">Enter Username</label>
                            <input type="text" name="user_name" id="user_name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="username" pattern=".{3,}" required>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type="password" name="password" id="password" placeholder="Four or more characters" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" pattern=".{4,}" required>
                        </div>
                        <div class="flex items-center justify-between">
                            <a href="https://www.hadassah.org.il/contact-us/" target="_blank" class="text-sm font-medium text-primary-600 hover:underline">Forgot Your Password?</a>
                        </div>
                        <div>
                            <button type="submit" class="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign In</button>
                        </div>
                        <p class="text-sm font-light text-blak">Don’t have an account yet?<a href="https://www.hadassah.org.il/contact-us/" target="_blank" class="font-medium text-primary-600 hover:underline">Sign Up</a></p>
                    </form>
                </div>
            </div>
            <div class="hidden alert-meesage" id="alert-meesage">
                <div class="hidden p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50" role="alert">
                    <span class="font-medium">Warning alert!</span>
                </div>
            </div>
        </div>
    </section>
    <script src="js/login.js"></script>
</body>
</html>