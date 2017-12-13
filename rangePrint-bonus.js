function printRange(start,end,step) {
    if (step == null) {
        step = 1;
    }
    if (end == null) {
        end = start;
        start = 0;
    }
    console.log("start="+start+" end="+end+" step="+step);
    for (i=start;i<end;i=i+step) {
        console.log(i);
    }
}

printRange(2,10,2);

printRange(4, 8);

printRange(4);

printRange(-2,2,1);

// printRange(3,1,-1);