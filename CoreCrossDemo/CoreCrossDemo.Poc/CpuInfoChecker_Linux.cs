namespace HCSS.Web.Tools
{
    public class CpuInfoChecker_Linux
    {
        public string GetCPUId()
        {
            //var output = "ps aux".Bash();
            var output = "cat /sys/class/dmi/id/board_serial".Bash();
            return output;
        }
    }
}
