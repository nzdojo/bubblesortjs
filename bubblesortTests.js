

describe('bubbleSort', () =>
  it('should sort the list correctly', (done) => {
    let list = [-2, 3, 1, -1, 0, 7, 4];
    let shortlist = [2];
    let emptylist = [];
  
    bubbleSort(list);
    bubbleSort(shortlist);
  
    expect(list).toEqual([-2, -1, 0, 1, 3, 4, 7]);
    expect(shortlist).toEqual([2]);
    expect(emptylist).toEqual([]);
    done();
  })
);