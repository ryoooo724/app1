const getFortune = async (): Promise<any> => {
    try {
      const response = await fetch('http://localhost:8080/api/fortune'); // APIのエンドポイントを指定
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch fortune:', error);
      return null;
    }
  };
  
  export default { getFortune };
  