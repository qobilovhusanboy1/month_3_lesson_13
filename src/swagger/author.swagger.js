/**
 * @swagger
 * /api/create/author:
 *   post:
 *     summary: author create
 *     tags: [Author]
 *     description: Author Create.
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
 *                 date_of_birthday:
 *                   example: '12.02.2000'
 *                   type: string
 *                   required: true
 *                 date_of_death:
 *                   example: '01.01.2021'
 *                   type: string
 *                   required: true
 *                 country:
 *                   type: string
 *                   example: Uzbekistan
 *                   required: true
 *                 bio:
 *                    type: string
 *                    example: This is author good
 *                    required: true
 *     responses:
 *       201:
 *         description: Success create author.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                    example: Success
 *                    type: string
 *                 first_name:
 *                   example: Jon
 *                   type: string
 *                 last_name:
 *                   example: Doe
 *                   type: string
 *                 date_of_birthday:
 *                   example: '12.02.2000'
 *                   type: string
 *                 date_of_death:
 *                   example: '01.01.2021'
 *                   type: string
 *                 country:
 *                   type: string
 *                   example: Uzbekistan
 *                 bio:
 *                    type: string
 *                    example: This is author good
 *                 created_at:
 *                    type: string
 *                    example: 2023-09-03 12:25:23.304+05
 *                 update_at:
 *                    type: string
 *                    example: 2023-09-03 12:25:23.304+05
 * /api/get/author:
 *   get:
 *     summary: Get authors
 *     tags: [Author]
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *     responses:
 *       201:
 *         description: Success get author.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                    example: Success
 *                    type: string
 *                 id:
 *                   example: 1
 *                   type: number
 *                 first_name:
 *                   example: Jon
 *                   type: string
 *                 last_name:
 *                   example: Doe
 *                   type: string
 *                 date_of_birthday:
 *                   example: '12.02.2000'
 *                   type: string
 *                 date_of_death:
 *                   example: '01.01.2021'
 *                   type: string
 *                 country:
 *                   type: string
 *                   example: Uzbekistan
 *                 bio:
 *                    type: string
 *                    example: This is author good
 *                 created_at:
 *                    type: string
 *                    example: 2023-09-03 12:25:23.304+05
 *                 update_at:
 *                    type: string
 *                    example: 2023-09-03 12:25:23.304+05
 * /api/get/author/{id}:
 *   get:
 *     summary: Get a author by ID
 *     tags: [Author]
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *     responses:
 *       201:
 *         description: Success get one author.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                    example: Success
 *                    type: string
 *                 id:
 *                   example: 1
 *                   type: number
 *                 first_name:
 *                   example: Jon
 *                   type: string
 *                 last_name:
 *                   example: Doe
 *                   type: string
 *                 date_of_birthday:
 *                   example: '12.02.2000'
 *                   type: string
 *                 date_of_death:
 *                   example: '01.01.2021'
 *                   type: string
 *                 country:
 *                   type: string
 *                   example: Uzbekistan
 *                 bio:
 *                    type: string
 *                    example: This is author good
 *                 created_at:
 *                    type: string
 *                    example: 2023-09-03 12:25:23.304+05
 *                 update_at:
 *                    type: string
 *                    example: 2023-09-03 12:25:23.304+05
 */