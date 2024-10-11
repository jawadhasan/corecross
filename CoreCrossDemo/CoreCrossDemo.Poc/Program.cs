using System;
using System.IO;
using System.Text;

namespace CoreCrossDemo.Poc
{
    class Program
    {
        static void Main(string[] args)
        {
            var js = ReadJs();
            ExecuteJS(js);

           // var output = "./ArabicCoverter.js".Node();
            //Console.WriteLine(output);
        }


        static void ExecuteJS(string jsCode)
        {
            var proc = new System.Diagnostics.Process();
            proc.StartInfo.CreateNoWindow = true;
            proc.StartInfo.RedirectStandardInput = true;
            proc.StartInfo.RedirectStandardOutput = true;
            proc.StartInfo.UseShellExecute = false;
            proc.StartInfo.RedirectStandardError = true;
            proc.StartInfo.FileName = "node.exe";
            proc.StartInfo.Arguments = "-i";
            proc.Start();
            proc.BeginOutputReadLine();


            //proc.StandardInput.WriteLine("2 + 2;");
            proc.StandardInput.WriteLine(jsCode);
            proc.StandardInput.WriteLine("let testText = 'جواد حسن';let resultOutput = ProcessInput(testText);console.log(resultOutput);");
           // proc.StandardInput.WriteLine("setTimeout(function(){ process.exit();}, 10000).suppressOut;");
            proc.OutputDataReceived += proc_OutputDataReceived;
            proc.WaitForExit();
        }
        static void proc_OutputDataReceived(object sender, System.Diagnostics.DataReceivedEventArgs e)
        {
            if (!e.Data.Contains("undefined"))
            {
                Console.WriteLine(e.Data);
                File.WriteAllText("covertedText", e.Data);
            }
            
        }


        public static string ReadJs()
        {
            var js = File.ReadAllText(@"ArabicConverter.js");
            return js;
        }
        public void test()
        {
            //File.WriteAllBytes("file.txt", Encoding.UTF8.GetBytes(a.ToString()));
        }
    }
}
