#include "stm32l1xx.h"
#include "Biblioteca_SDM.h"
#include "Utiles_SDM.h"
int main(void){
long int temp_min=0;
long int temp_max=0;
int aux = 0;
unsigned short valor = 0;
unsigned char texto[6];
Init_SDM();
Init_LCD();
//LED config
// PB6 (Blue LED) output
GPIOB->MODER &= ~(1 << (6*2 +1));
GPIOB->MODER |= (1 << (6*2));
// PB7 (Green LED) output
GPIOB->MODER &= ~(1 << (7*2 +1));
GPIOB->MODER |= (1 << (7*2));

// USER button configuration (PA0) as digital input(00)
GPIOA->MODER &= ~(1 << (0*2 +1));
GPIOA->MODER &= ~(1 << (0*2));

// ADC Configuration

GPIOA->MODER |= 0x00000300; // PA4 as analog

while (1) {

ADC1->CR2 &= ~(0x00000001); // ADON = 0 (ADC powered off)
ADC1->CR1 = 0x00000000; // OVRIE = 0 (Overrun IRQ disabled)
// RES = 00 (resolution = 12 bits)
// SCAN = 0 (scan mode disabled)
// EOCIE = 0 (EOC IRQ disabled)
ADC1->CR2 = 0x00000400; // EOCS = 1 (EOC to be activated after each conversion)
// DELS = 000 (no delay)
// CONT = 0 (single conversion)
ADC1->SQR1 = 0x00000000; // 1 channel in the sequence
ADC1->SQR5 = 0x00000004; // Channel is AIN4
ADC1->CR2 |= 0x00000001; // ADON = 1 (ADC powered on)



	while(1){

		LCD_Texto('config');

		while ((GPIOA->IDR&0x00000001)!=0){// -WHILE PRESSED- If PA0 = 1 (USER pressed),
		// wait to avoid rebounds

		// Start conversion
		while ((ADC1->SR&0x0040)==0); // -CHECK IF READY- // While ADONS = 0, i.e., ADC is not ready
		// to convert, I wait
		ADC1->CR2 |= 0x40000000; // -START- When ADONS = 1, I start conversion
		// (SWSTART = 1)
		// Wait till conversion is finished
		while ((ADC1->SR&0x0002)==0); //-WAIT FOR CONVERTION- WAIT FOR STATUS TO CHANGE // If EOC = 0, i.e., the conversion is not
		// finished, I wait
		valor = ADC1->DR; // When EOC = 1, I take the result and store it in
		// 
		// Convert result to string and decimal
		Bin2Decimal(valor, temp);
		Bin2Ascii(valor,&texto[0]);
		// Show result in LCD
		LCD_Texto(texto);
	}
	if(aux=0){
		temp_min = temp;
		aux++;
	}elseif(aux=1){
		temp_max=temp;
		break;
	}

	}


	ADC1->CR2 &= ~(0x00000001); // ADON = 0 (ADC powered off)
	ADC1->CR1 = 0x00000000; // OVRIE = 0 (overrun IRQ disabled)
	// RES = 00 (resolution = 12 bits)
	// SCAN = 0 (scan mode disabled)
	// EOCIE = 0 (EOC IRQ disabled)
	ADC1->CR2 |= 0x00000012; // EOCS = 1 (EOC is activated after each conversion)
	// DELS = 001 (delay till data is read)
	// CONT = 1 (continuous conversion)
	//ADC1->SQR1 = 0x00000000; // 1 channel in the sequence
	//ADC1->SQR5 = 0x00000004; // The selected channel is AIN4
	ADC1->CR2 |= 0x00000001; // ADON = 1 (ADC powered on)
	while ((ADC1->SR&0x0040)==0); // If ADCONS = 0, I wait till converter is ready
	ADC1->CR2 |= 0x40000000; // When ADCONS = 1, I start conversion (SWSTART = 1

	while ((GPIOA->IDR&0x00000001)=0){

	valor = ADC1->DR; // When EOC = 1, I take the result and store it in
	// 
	// Convert result to string and decimal
	Bin2Decimal(valor, temp0);
	Bin2Ascii(valor,&texto[0]);
	LCD_Texto(texto);

//NOW IT'S CONTINOUS CONVERSION

      
    while(temp0 > temp_max){

        // Green LED ON, Blue LED OFF
       GPIOB->BSRR = (1<<7);
       GPIOB->BSRR = (1<<6)<<16;
       LCD_Texto(HOT);


       }

    while(temp0 < temp_min){

        // Green LED OFF, Blue LED ON
        GPIOB->BSRR = (1<<7)<<16;
        GPIOB->BSRR = (1<<6);
        LCD_Texto(COLD);

    	}
                  
         // Green LED OFF, blue LED OFF. DEFAULT
    	LCD_Texto(texto);
        GPIOB->BSRR = (1<<7)<<16;
        GPIOB->BSRR = (1<<6)<<16;
        }

        //BACK TO PROGRAMMING MODE
      }
   }
}