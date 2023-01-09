const object = {
    a: {
      b: {
        c: 10,
        d: 20
      }
    },
    e: {
      f: 20,
      g: 40
    }
  };
  
  function path(object, pathr, point = 0) {
      // write logic
      // console.log(pathr.length)
      if(point === pathr.length - 1){
          return object[pathr[point]];
      }
      if(point >= pathr.length) return undefined;
      // let current = pathr[point];
      console.log(object[pathr[point]])
      return path(object[pathr[point]], pathr, point + 2);
  }
  console.log(path(object, "a.b.c"))