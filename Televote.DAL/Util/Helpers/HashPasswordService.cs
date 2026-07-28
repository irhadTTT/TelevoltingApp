using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System;
using System.Security.Cryptography;
using System.Text;

namespace televolting_app.Util.Helpers
{
    public static class HashPasswordService
    {
        public static byte[] GenerateHashPassword(string password)
        {
            var md5 = new MD5CryptoServiceProvider();
            var data = Encoding.ASCII.GetBytes(password);
            var md5data = md5.ComputeHash(data);
            /*var sha1 = new SHA1CryptoServiceProvider();
            var sha1data = sha1.ComputeHash(data);*/
            //var hashedPassword = ASCIIEncoding.GetString(md5data);
            return md5data;
        }
        public static string GenerateHashPass(string password)
        {
            byte[] salt = new byte[128 / 8];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(salt);
            }
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA1,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));
            return hashed;
        }
        private static string getHash(string text)
        {
            // SHA512 is disposable by inheritance.  
            using (var sha256 = SHA256.Create())
            {
                // Send a sample text to hash.  
                var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(text));
                // Get the hashed string.  
                return BitConverter.ToString(hashedBytes).Replace("-", "").ToLower();
            }
        }
    }
}
