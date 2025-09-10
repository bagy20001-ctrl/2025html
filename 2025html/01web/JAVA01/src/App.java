public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");


        //정수 -> 실수
        //실수 -> 정수

        //정수형 : long(8) > int(4) > short(2) > byte(1)
        //실수형 : double(8) > float(4)

        //long * int = long
        //double * int = double

        int num = 10;
        float floatNum = num;
        System.out.println(floatNum); // 무시적
        System.out.println((int)floatNum); // 명시적

        short sNum = 200;
        System.out.println(sNum); // 200
        byte byteNum = (byte)sNum;
        System.out.println(byteNum); // -56
    }
}
