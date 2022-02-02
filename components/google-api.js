import Script from "next/script";

const GoogleScript = () => {
  <>
    <Script
      async
      defer
      src="https://apis.google.com/js/api.js"
      onLoad="this.onload=function(){};loadClient()"
      onreadystatechange="if (this.readyState === 'complete') this.onload()"
    />
  </>;
};

export default GoogleScript;
