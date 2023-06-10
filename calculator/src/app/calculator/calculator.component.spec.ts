

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  
  
  let calculator:CalculatorComponent

  beforeEach(async () => {
    
      calculator = new CalculatorComponent();
    })
    
    it('should add two numbers', () => {
      const result=calculator.add(3,4);
      expect(result).toBe(7);
    });
    it('should substract two numbers', () => {
      const result=calculator.sub(10,7);
      expect(result).toBe(3);
    });
    
  });




