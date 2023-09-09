/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: user register
 *     tags: [Auth]
 *     description: User register.
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                 first_name:
 *                   example: Jon
 *                   type: string
 *                   required: true
 *                 last_name:
 *                   example: Doe
 *                   type: string
 *                   required: true
 *                 phonenumber:
 *                   example: '+998881758881'
 *                   type: string
 *                   required: true
 *                 email:
 *                   example: xasan@gmail.com
 *                   type: string
 *                   required: true
 *                 password:
 *                   type: string
 *                   example: 77792003
 *                   required: true
 *     responses:
 *       201:
 *         description: Success register.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Success
 *                 data:
 *                    type: string
 *                    example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzMzE5Mzg4LCJleHAiOjE2OTM0MDU3ODh9.EEzGXWOIs6FW6ji2HxNjXnl8UbUzv0Dwj3Z41kdrpY0
 * /api/auth/login:
 *   post:
 *     summary: login user
 *     tags: [Auth]
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                 email:
 *                    type: string
 *                    example: "xasan@gmail.com"
 *                 password:
 *                   type: string
 *                   example: 77792003
 *     responses:
 *       200:
 *         description: Success login user.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Success
 *                 data:
 *                    type: string
 *                    example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTY4ZDFlLWUzNTctNDgzNS05YzM2LTMzMGY3MmEyYjJhNiIsImlhdCI6MTY5MTgyNzA1MSwiZXhwIjoxNjkyMDg2MjUxfQ.YBAK3LZ0ByOTKh7ttBGS9voDtjSjq_zyBHkKbzqArYc
 */