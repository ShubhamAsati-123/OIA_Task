"use client"
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();

  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    }
  }, [status, router]);

  return (
    <div>
      <h1 className="text-4xl font-montserrat font-semibold text-left w-[422px]">
        Sign In
      </h1>
      <p className="text-base font-lato my-2">Sign in to your account</p>

      <div className="flex justify-center items-center my-6 gap-7">
        <Button
          className="w-48 text-[#858585] flex gap-2 rounded-lg"
          onClick={() => signIn("google")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
            className="h-6 w-6"
          >
            <path
              fill="#fbc02d"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#e53935"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4caf50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1565c0"
              d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          Sign in with Google
        </Button>
        <Button className="w-48 text-[#858585] flex gap-2 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0,0,256,256"
            className="h-6 w-6"
          >
            <g
              fill="#999999"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
            >
              <g transform="scale(10.66667,10.66667)">
                <path d="M16.125,1c-1.153,0.067 -2.47667,0.70934 -3.26367,1.52734c-0.711,0.744 -1.27197,1.84897 -1.04297,2.91797c1.253,0.033 2.51067,-0.62598 3.26367,-1.45898c0.703,-0.779 1.23597,-1.86633 1.04297,-2.98633zM16.19336,5.44336c-1.809,0 -2.56536,1.11133 -3.81836,1.11133c-1.289,0 -2.46734,-1.04102 -4.02734,-1.04102c-2.122,0.001 -5.34766,1.96666 -5.34766,6.59766c0,4.213 3.81766,8.88867 5.97266,8.88867c1.309,0.013 1.62634,-0.82303 3.40234,-0.83203c1.778,-0.013 2.16166,0.84303 3.47266,0.83203c1.476,-0.011 2.6287,-1.63297 3.4707,-2.91797c0.604,-0.92 0.85231,-1.38969 1.32031,-2.42969c-3.473,-0.88 -4.164,-6.48067 0,-7.63867c-0.786,-1.341 -3.08031,-2.57031 -4.44531,-2.57031z"></path>
              </g>
            </g>
          </svg>
          Sign in with Apple
        </Button>
      </div>

      {/* Email Login */}
      <div className="w-[423px] h-[391px] bg-[#0D0D0D] rounded-2xl flex flex-col justify-center items-center px-8 gap-5">
        <div className="w-full flex flex-col gap-2">
          <Label htmlFor="email" className="text-base font-lato">
            Email address
          </Label>
          <Input type="email" id="email" placeholder="Email" className="" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Label htmlFor="email" className="text-base font-lato">
            Password
          </Label>
          <Input type="password" id="password" placeholder="Password" />
        </div>

        <Link href="" className="text-base font-lato text-[#4979D9]">
          Forgot password?
        </Link>

        <Button className="bg-[#605BFF] hover:bg-[#615bffe1] w-full">
          Sign In
        </Button>
      </div>

      {/* Dont have an account */}
      <div className="text-[#858585] text-base text-center my-5">
        Don&apos;t have an account?{" "}
        <span className="text-[#346BD4]">Register here</span>
      </div>

      {/* Social Media Link */}
      <div className="flex gap-8 justify-center items-center mt-32">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0,0,256,256"
          className="h-9 w-9"
        >
          <defs>
            <linearGradient
              x1="4"
              y1="23.508"
              x2="44"
              y2="23.508"
              gradientUnits="userSpaceOnUse"
              id="color-1_AZOZNnY73haj_gr1"
            >
              <stop offset="0" stop-color="#999999"></stop>
              <stop offset="1" stop-color="#343434"></stop>
            </linearGradient>
          </defs>
          <g
            fill="none"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
          >
            <g transform="scale(5.33333,5.33333)">
              <path
                d="M24,4c-11.046,0 -20,8.954 -20,20c0,8.887 5.801,16.411 13.82,19.016h12.36c8.019,-2.605 13.82,-10.129 13.82,-19.016c0,-11.046 -8.954,-20 -20,-20z"
                fill="url(#color-1_AZOZNnY73haj_gr1)"
              ></path>
              <path
                d="M30.01,41.996l-0.01,-5.798c0,-0.939 -0.22,-1.856 -0.642,-2.687c5.641,-1.133 8.386,-4.468 8.386,-10.177c0,-2.255 -0.665,-4.246 -1.976,-5.92c0.1,-0.317 0.174,-0.645 0.22,-0.981c0.188,-1.369 -0.023,-2.264 -0.193,-2.984l-0.027,-0.116c-0.186,-0.796 -0.409,-1.364 -0.418,-1.388l-0.111,-0.282l-0.111,-0.282l-0.302,-0.032l-0.303,-0.032c0,0 -0.199,-0.021 -0.501,-0.021c-0.419,0 -1.04,0.042 -1.627,0.241l-0.196,0.066c-0.74,0.249 -1.439,0.485 -2.417,1.069c-0.286,0.171 -0.599,0.366 -0.934,0.584c-1.514,-0.375 -3.143,-0.566 -4.848,-0.566c-1.722,0 -3.365,0.192 -4.889,0.571c-0.339,-0.22 -0.654,-0.417 -0.942,-0.589c-0.978,-0.584 -1.677,-0.819 -2.417,-1.069l-0.196,-0.066c-0.585,-0.199 -1.207,-0.241 -1.626,-0.241c-0.302,0 -0.501,0.021 -0.501,0.021l-0.302,0.032l-0.3,0.031l-0.112,0.281l-0.113,0.283c-0.01,0.026 -0.233,0.594 -0.419,1.391l-0.027,0.115c-0.17,0.719 -0.381,1.615 -0.193,2.983c0.048,0.346 0.125,0.685 0.23,1.011c-1.285,1.666 -1.936,3.646 -1.936,5.89c0,5.695 2.748,9.028 8.397,10.17c-0.194,0.388 -0.345,0.798 -0.452,1.224c-0.197,0.067 -0.378,0.112 -0.538,0.137c-0.238,0.036 -0.487,0.054 -0.739,0.054c-0.686,0 -1.225,-0.134 -1.435,-0.259c-0.313,-0.186 -0.872,-0.727 -1.414,-1.518c-0.463,-0.675 -1.185,-1.558 -1.992,-1.927c-0.698,-0.319 -1.437,-0.502 -2.029,-0.502c-0.138,0 -0.265,0.01 -0.376,0.028c-0.517,0.082 -0.949,0.366 -1.184,0.78c-0.203,0.357 -0.235,0.773 -0.088,1.141c0.219,0.548 0.851,0.985 1.343,1.255c0.242,0.133 0.765,0.619 1.07,1.109c0.229,0.368 0.335,0.63 0.482,0.992c0.087,0.215 0.183,0.449 0.313,0.732c0.47,1.022 1.937,1.924 2.103,2.023c0.806,0.483 2.161,0.638 3.157,0.683l0.123,0.003h0.001c0.24,0 0.57,-0.023 1.004,-0.071v2.613c0.002,0.529 -0.537,0.649 -1.25,0.638l0.547,0.184c2.095,0.749 4.345,1.177 6.7,1.177c2.355,0 4.605,-0.428 6.703,-1.176l0.703,-0.262c-0.711,-0.024 -1.39,-0.14 -1.396,-0.566z"
                fill="#000000"
                opacity="0.05"
              ></path>
              <path
                d="M30.781,42.797c-0.406,0.047 -1.281,-0.109 -1.281,-0.795v-5.804c0,-1.094 -0.328,-2.151 -0.936,-3.052c5.915,-0.957 8.679,-4.093 8.679,-9.812c0,-2.237 -0.686,-4.194 -2.039,-5.822c0.137,-0.365 0.233,-0.75 0.288,-1.147c0.175,-1.276 -0.016,-2.086 -0.184,-2.801l-0.027,-0.116c-0.178,-0.761 -0.388,-1.297 -0.397,-1.319l-0.111,-0.282l-0.303,-0.032c0,0 -0.178,-0.019 -0.449,-0.019c-0.381,0 -0.944,0.037 -1.466,0.215l-0.196,0.066c-0.714,0.241 -1.389,0.468 -2.321,1.024c-0.332,0.198 -0.702,0.431 -1.101,0.694c-1.533,-0.401 -3.192,-0.605 -4.937,-0.605c-1.762,0 -3.435,0.205 -4.979,0.61c-0.403,-0.265 -0.775,-0.499 -1.109,-0.699c-0.932,-0.556 -1.607,-0.784 -2.321,-1.024l-0.196,-0.066c-0.521,-0.177 -1.085,-0.215 -1.466,-0.215c-0.271,0 -0.449,0.019 -0.449,0.019l-0.302,0.032l-0.113,0.283c-0.009,0.022 -0.219,0.558 -0.397,1.319l-0.027,0.116c-0.169,0.715 -0.36,1.524 -0.184,2.8c0.056,0.407 0.156,0.801 0.298,1.174c-1.327,1.62 -1.999,3.567 -1.999,5.795c0,5.703 2.766,8.838 8.686,9.806c-0.395,0.59 -0.671,1.255 -0.813,1.964c-0.33,0.13 -0.629,0.216 -0.891,0.256c-0.263,0.04 -0.537,0.06 -0.814,0.06c-0.69,0 -1.353,-0.129 -1.69,-0.329c-0.44,-0.261 -1.057,-0.914 -1.572,-1.665c-0.35,-0.51 -1.047,-1.417 -1.788,-1.755c-0.635,-0.29 -1.298,-0.457 -1.821,-0.457c-0.11,0 -0.21,0.008 -0.298,0.022c-0.366,0.058 -0.668,0.252 -0.828,0.534c-0.128,0.224 -0.149,0.483 -0.059,0.708c0.179,0.448 0.842,0.85 1.119,1.002c0.335,0.184 0.919,0.744 1.254,1.284c0.251,0.404 0.37,0.697 0.521,1.067c0.085,0.209 0.178,0.437 0.304,0.712c0.331,0.719 1.353,1.472 1.905,1.803c0.754,0.452 2.154,0.578 2.922,0.612l0.111,0.002c0.299,0 0.8,-0.045 1.495,-0.135v3.177c0,0.779 -0.991,0.81 -1.234,0.81c-0.031,0 0.503,0.184 0.503,0.184c1.963,0.644 4.054,1.004 6.232,1.004c2.178,0 4.269,-0.36 6.231,-1.003c0,0 0.581,-0.204 0.55,-0.2z"
                fill="#000000"
                opacity="0.07"
              ></path>
              <path
                d="M36.744,23.334c0,-2.31 -0.782,-4.226 -2.117,-5.728c0.145,-0.325 0.296,-0.761 0.371,-1.309c0.172,-1.25 -0.031,-2 -0.203,-2.734c-0.172,-0.734 -0.375,-1.25 -0.375,-1.25c0,0 -0.922,-0.094 -1.703,0.172c-0.781,0.266 -1.453,0.469 -2.422,1.047c-0.453,0.27 -0.909,0.566 -1.27,0.806c-1.543,-0.428 -3.24,-0.648 -5.025,-0.648c-1.801,0 -3.513,0.221 -5.067,0.652c-0.362,-0.241 -0.821,-0.539 -1.277,-0.811c-0.969,-0.578 -1.641,-0.781 -2.422,-1.047c-0.781,-0.266 -1.703,-0.172 -1.703,-0.172c0,0 -0.203,0.516 -0.375,1.25c-0.172,0.734 -0.375,1.484 -0.203,2.734c0.077,0.562 0.233,1.006 0.382,1.333c-1.31,1.493 -2.078,3.397 -2.078,5.704c0,5.983 3.232,8.714 9.121,9.435c-0.687,0.726 -1.148,1.656 -1.303,2.691c-0.387,0.17 -0.833,0.33 -1.262,0.394c-1.104,0.167 -2.271,0 -2.833,-0.333c-0.562,-0.333 -1.229,-1.083 -1.729,-1.813c-0.422,-0.616 -1.031,-1.331 -1.583,-1.583c-0.729,-0.333 -1.438,-0.458 -1.833,-0.396c-0.396,0.063 -0.583,0.354 -0.5,0.563c0.083,0.208 0.479,0.521 0.896,0.75c0.417,0.229 1.063,0.854 1.438,1.458c0.418,0.674 0.5,1.063 0.854,1.833c0.249,0.542 1.101,1.219 1.708,1.583c0.521,0.313 1.562,0.491 2.688,0.542c0.389,0.018 1.308,-0.096 2.083,-0.206v3.75c0,0.639 -0.585,1.125 -1.191,1.013c1.945,0.654 4.022,0.986 6.189,0.986c2.166,0 4.243,-0.332 6.19,-0.984c-0.605,0.111 -1.19,-0.375 -1.19,-1.014v-5.804c0,-1.329 -0.527,-2.53 -1.373,-3.425c5.846,-0.702 9.117,-3.368 9.117,-9.439zM11.239,32.727c-0.154,-0.079 -0.237,-0.225 -0.185,-0.328c0.052,-0.103 0.22,-0.122 0.374,-0.043c0.154,0.079 0.237,0.225 0.185,0.328c-0.052,0.103 -0.22,0.122 -0.374,0.043zM12.451,33.482c-0.081,0.088 -0.255,0.06 -0.389,-0.062c-0.134,-0.122 -0.177,-0.293 -0.096,-0.381c0.081,-0.088 0.255,-0.06 0.389,0.062c0.134,0.122 0.177,0.293 0.096,0.381zM13.205,34.732c-0.102,0.072 -0.275,0.005 -0.386,-0.15c-0.111,-0.155 -0.118,-0.34 -0.016,-0.412c0.102,-0.072 0.275,-0.005 0.386,0.15c0.11,0.155 0.118,0.34 0.016,0.412zM14.288,35.673c-0.069,0.112 -0.265,0.117 -0.437,0.012c-0.172,-0.105 -0.256,-0.281 -0.187,-0.393c0.069,-0.112 0.265,-0.117 0.437,-0.012c0.172,0.105 0.256,0.281 0.187,0.393zM15.312,36.594c-0.213,-0.026 -0.371,-0.159 -0.353,-0.297c0.017,-0.138 0.204,-0.228 0.416,-0.202c0.213,0.026 0.371,0.159 0.353,0.297c-0.017,0.137 -0.203,0.228 -0.416,0.202zM16.963,36.833c-0.227,-0.013 -0.404,-0.143 -0.395,-0.289c0.009,-0.146 0.2,-0.255 0.427,-0.242c0.227,0.013 0.404,0.143 0.395,0.289c-0.009,0.147 -0.2,0.255 -0.427,0.242zM18.521,36.677c-0.242,0 -0.438,-0.126 -0.438,-0.281c0,-0.155 0.196,-0.281 0.438,-0.281c0.242,0 0.438,0.126 0.438,0.281c0,0.155 -0.197,0.281 -0.438,0.281z"
                fill="#ffffff"
              ></path>
            </g>
          </g>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0,0,256,256"
          className="h-9 w-9"
        >
          <g
            fill="#999999"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
          >
            <g transform="scale(5.12,5.12)">
              <path d="M25,2c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c12.683,0 23,-10.317 23,-23c0,-12.683 -10.317,-23 -23,-23zM36.237,20.524c0.01,0.236 0.016,0.476 0.016,0.717c0,7.318 -5.573,15.759 -15.762,15.759c-3.128,0 -6.041,-0.917 -8.491,-2.489c0.433,0.052 0.872,0.077 1.321,0.077c2.596,0 4.985,-0.884 6.879,-2.37c-2.424,-0.044 -4.468,-1.649 -5.175,-3.847c0.339,0.065 0.686,0.1 1.044,0.1c0.505,0 0.995,-0.067 1.458,-0.195c-2.532,-0.511 -4.441,-2.747 -4.441,-5.432c0,-0.024 0,-0.047 0,-0.07c0.747,0.415 1.6,0.665 2.509,0.694c-1.488,-0.995 -2.464,-2.689 -2.464,-4.611c0,-1.015 0.272,-1.966 0.749,-2.786c2.733,3.351 6.815,5.556 11.418,5.788c-0.095,-0.406 -0.145,-0.828 -0.145,-1.262c0,-3.059 2.48,-5.539 5.54,-5.539c1.593,0 3.032,0.672 4.042,1.749c1.261,-0.248 2.448,-0.709 3.518,-1.343c-0.413,1.292 -1.292,2.378 -2.437,3.064c1.122,-0.136 2.188,-0.432 3.183,-0.873c-0.742,1.111 -1.681,2.088 -2.762,2.869z"></path>
            </g>
          </g>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0,0,256,256"
          className="h-9 w-9"
        >
          <g
            fill="#999999"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
          >
            <g transform="scale(5.12,5.12)">
              <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
            </g>
          </g>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0,0,256,256"
          className="h-9 w-9"
        >
          <g
            fill="none"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
          >
            <g transform="scale(5.33333,5.33333)">
              <path
                d="M42,45.478c0,0.416 -0.479,0.65 -0.807,0.395l-8.193,-6.874l0.781,2.343c0.108,0.324 -0.133,0.658 -0.475,0.658h-23.306c-2.761,0 -5,-2.239 -5,-5v-26c0,-2.761 2.239,-5 5,-5h27c2.761,0 5,2.239 5,5z"
                fill="#999999"
              ></path>
              <path
                d="M32.627,17.295c-0.027,-0.041 -0.05,-0.066 -0.089,-0.095c-0.383,-0.282 -2.803,-1.99 -5.627,-2.2l-0.27,0.55c2.78,0.67 4.05,1.64 5.38,2.83c-2.291,-1.17 -4.561,-2.38 -8.521,-2.38c-3.96,0 -6.23,1.21 -8.52,2.38c1.33,-1.19 2.85,-2.27 5.38,-2.83l-0.27,-0.55c-2.957,0.284 -5.261,1.926 -5.629,2.201c-0.038,0.029 -0.061,0.053 -0.087,0.093c-0.333,0.509 -2.866,4.607 -3.362,12.145c-0.007,0.113 0.032,0.232 0.109,0.316c2.555,2.804 6.16,3.185 7.06,3.237c0.134,0.008 0.256,-0.053 0.336,-0.161l0.794,-1.061c-1.57,-0.54 -3.36,-1.51 -4.9,-3.27c1.84,1.38 4.61,2.5 9.09,2.5c4.48,0 7.25,-1.12 9.09,-2.5c-1.54,1.76 -3.33,2.73 -4.9,3.27l0.794,1.061c0.08,0.107 0.202,0.168 0.336,0.161c0.9,-0.052 4.505,-0.434 7.06,-3.237c0.076,-0.084 0.116,-0.203 0.109,-0.316c-0.497,-7.532 -3.028,-11.631 -3.363,-12.144zM20,28c-1.1,0 -2,-1.12 -2,-2.5c0,-1.38 0.9,-2.5 2,-2.5c1.1,0 2,1.12 2,2.5c0,1.38 -0.9,2.5 -2,2.5zM27,28c-1.1,0 -2,-1.12 -2,-2.5c0,-1.38 0.9,-2.5 2,-2.5c1.1,0 2,1.12 2,2.5c0,1.38 -0.9,2.5 -2,2.5z"
                fill="#ffffff"
              ></path>
              <path
                d="M26.91,15c2.824,0.211 5.244,1.918 5.627,2.2c0.039,0.029 0.063,0.054 0.089,0.095c0.335,0.513 2.866,4.612 3.362,12.144c0.007,0.113 -0.032,0.232 -0.109,0.316c-2.555,2.804 -6.16,3.185 -7.06,3.237c-0.008,0 -0.015,0.001 -0.023,0.001c-0.125,0 -0.238,-0.06 -0.313,-0.161l-0.793,-1.062c1.57,-0.54 3.36,-1.51 4.9,-3.27c-1.84,1.38 -4.61,2.5 -9.09,2.5c-4.48,0 -7.25,-1.12 -9.09,-2.5c1.54,1.76 3.33,2.73 4.9,3.27l-0.794,1.061c-0.076,0.101 -0.189,0.161 -0.313,0.161c-0.008,0 -0.015,0 -0.023,-0.001c-0.9,-0.052 -4.505,-0.434 -7.06,-3.237c-0.076,-0.084 -0.116,-0.203 -0.109,-0.316c0.496,-7.538 3.03,-11.636 3.362,-12.145c0.026,-0.04 0.049,-0.064 0.087,-0.093c0.368,-0.275 2.671,-1.917 5.629,-2.201l0.27,0.55c-2.53,0.56 -4.05,1.64 -5.38,2.83c2.291,-1.169 4.561,-2.379 8.521,-2.379c3.96,0 6.23,1.21 8.52,2.38c-1.33,-1.19 -2.6,-2.16 -5.38,-2.83l0.27,-0.55M27,28c1.1,0 2,-1.12 2,-2.5c0,-1.38 -0.9,-2.5 -2,-2.5c-1.1,0 -2,1.12 -2,2.5c0,1.38 0.9,2.5 2,2.5M20,28c1.1,0 2,-1.12 2,-2.5c0,-1.38 -0.9,-2.5 -2,-2.5c-1.1,0 -2,1.12 -2,2.5c0,1.38 0.9,2.5 2,2.5M20.386,14.469l-0.344,0.033c-3.066,0.294 -5.436,1.966 -5.88,2.298c-0.085,0.063 -0.148,0.131 -0.206,0.22c-0.299,0.457 -2.936,4.691 -3.443,12.386c-0.017,0.251 0.07,0.501 0.238,0.685c2.653,2.912 6.335,3.338 7.401,3.4l0.014,0.001l0.037,0.001c0.282,0 0.542,-0.132 0.714,-0.362l0.794,-1.061l0.411,-0.549l-0.649,-0.223c-0.285,-0.098 -0.563,-0.206 -0.835,-0.323c1.445,0.352 3.06,0.526 4.863,0.526c1.803,0 3.418,-0.174 4.863,-0.526c-0.272,0.118 -0.55,0.225 -0.835,0.323l-0.649,0.223l0.411,0.549l0.794,1.061c0.172,0.23 0.432,0.362 0.714,0.362h0.014l0.037,-0.001c1.065,-0.061 4.748,-0.488 7.401,-3.4c0.168,-0.184 0.255,-0.434 0.238,-0.685c-0.506,-7.692 -3.143,-11.927 -3.442,-12.384c-0.059,-0.09 -0.124,-0.159 -0.211,-0.223c-0.468,-0.345 -2.951,-2.077 -5.887,-2.297l-0.337,-0.025l-0.149,0.303l-0.27,0.55l-0.17,0.347c-0.767,-0.114 -1.601,-0.178 -2.523,-0.178c-0.922,0 -1.756,0.064 -2.521,0.177l-0.17,-0.347l-0.27,-0.55l-0.153,-0.311zM27,27.5c-0.813,0 -1.5,-0.916 -1.5,-2c0,-1.084 0.687,-2 1.5,-2c0.813,0 1.5,0.916 1.5,2c0,1.084 -0.687,2 -1.5,2zM20,27.5c-0.813,0 -1.5,-0.916 -1.5,-2c0,-1.084 0.687,-2 1.5,-2c0.813,0 1.5,0.916 1.5,2c0,1.084 -0.687,2 -1.5,2z"
                fill="#000000"
                opacity="0.07"
              ></path>
              <path
                d="M26.91,15c2.824,0.211 5.244,1.918 5.627,2.2c0.039,0.029 0.063,0.054 0.089,0.095c0.335,0.513 2.866,4.612 3.362,12.144c0.007,0.113 -0.032,0.232 -0.109,0.316c-2.555,2.804 -6.16,3.185 -7.06,3.237c-0.008,0 -0.015,0.001 -0.023,0.001c-0.125,0 -0.238,-0.06 -0.313,-0.161l-0.793,-1.062c1.57,-0.54 3.36,-1.51 4.9,-3.27c-1.84,1.38 -4.61,2.5 -9.09,2.5c-4.48,0 -7.25,-1.12 -9.09,-2.5c1.54,1.76 3.33,2.73 4.9,3.27l-0.794,1.061c-0.076,0.101 -0.189,0.161 -0.313,0.161c-0.008,0 -0.015,0 -0.023,-0.001c-0.9,-0.052 -4.505,-0.434 -7.06,-3.237c-0.076,-0.084 -0.116,-0.203 -0.109,-0.316c0.496,-7.538 3.03,-11.636 3.362,-12.145c0.026,-0.04 0.049,-0.064 0.087,-0.093c0.368,-0.275 2.671,-1.917 5.629,-2.201l0.27,0.55c-2.53,0.56 -4.05,1.64 -5.38,2.83c2.291,-1.169 4.561,-2.379 8.521,-2.379c3.96,0 6.23,1.21 8.52,2.38c-1.33,-1.19 -2.6,-2.16 -5.38,-2.83l0.27,-0.55M27,28c1.1,0 2,-1.12 2,-2.5c0,-1.38 -0.9,-2.5 -2,-2.5c-1.1,0 -2,1.12 -2,2.5c0,1.38 0.9,2.5 2,2.5M20,28c1.1,0 2,-1.12 2,-2.5c0,-1.38 -0.9,-2.5 -2,-2.5c-1.1,0 -2,1.12 -2,2.5c0,1.38 0.9,2.5 2,2.5M20.683,13.938l-0.688,0.066c-3.199,0.307 -5.669,2.049 -6.132,2.396c-0.132,0.099 -0.235,0.209 -0.325,0.347c-0.5,0.765 -3.019,4.966 -3.523,12.627c-0.025,0.386 0.108,0.771 0.367,1.055c2.78,3.051 6.628,3.498 7.742,3.562l0.029,0.002l0.051,0.001c0.441,0 0.847,-0.205 1.114,-0.562l0.794,-1.061l0.408,-0.545c0.933,0.116 1.926,0.174 2.98,0.174c1.054,0 2.047,-0.058 2.981,-0.176l0.408,0.545l0.794,1.061c0.267,0.357 0.673,0.562 1.114,0.562h0.029l0.052,-0.002c1.113,-0.064 4.961,-0.511 7.741,-3.562c0.259,-0.284 0.393,-0.669 0.367,-1.055c-0.504,-7.657 -3.023,-11.86 -3.522,-12.625c-0.092,-0.141 -0.198,-0.253 -0.333,-0.352c-0.487,-0.359 -3.073,-2.163 -6.146,-2.393l-0.674,-0.05l-0.298,0.607l-0.27,0.55l-0.011,0.022c-0.687,-0.085 -1.426,-0.132 -2.232,-0.132c-0.806,0 -1.545,0.047 -2.231,0.132l-0.011,-0.022l-0.27,-0.55l-0.305,-0.622zM27,27c-0.473,0 -1,-0.616 -1,-1.5c0,-0.884 0.527,-1.5 1,-1.5c0.473,0 1,0.616 1,1.5c0,0.884 -0.527,1.5 -1,1.5zM20,27c-0.473,0 -1,-0.616 -1,-1.5c0,-0.884 0.527,-1.5 1,-1.5c0.473,0 1,0.616 1,1.5c0,0.884 -0.527,1.5 -1,1.5z"
                fill="#000000"
                opacity="0.05"
              ></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default SignIn;
