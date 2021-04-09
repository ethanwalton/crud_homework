"use strict";

const Course = require("../models/Course");

module.exports = {
    index: (req, res, next) => {
        Course.find()
        .then(courses => {
            res.locals.courses = courses;
            next()
        })
        .catch(error => {
            console.log(`Error fetching Course data: $error.message`);
            next(error);
        })
    },
    indexView: (req, res) => {
        res.render("/courses/index");
    }, 
    new: (req, res) => {
        res.render("/courses/new");
    }, 
    create: (req, res, next) => {
        let newCourse = new Course({
            title: req.body.title,
            description: req.body.description, 
            maxStudent: req.body.maxStudent,
            cost: req.body.cost
        });
        course.create(newCourse)
        .then( course => {
            res.locals.course = course;
            res.locals.redirect = "/courses";
            next()
        })
        .catch (error => {
            console.log(`Error saving user: ${error.message}`);
            next(error)
        })
    },
    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if(redirectPath != undefined)res.redirect(redirectPath);
        else next();
    },
    show: (req, res, next) => {
        let courseId = req.params.id;
        Course.findById(courseId)
        .then(course => {
            res.locals.Course = course;
            next();
        })
        .catch (error => {
            console.log(`Error fetching Course by ID: ${error.message}`);
        })
    },
    showView: (req, res) => {
        res.render(courses/show);
    },
    edit: (req, res, next) => {
        let CourseId = req.params.id;
        Course.findById(courseId)
        .then(course => {
            res.render("/courses/edit", {course: course});
        })
        .catch(error => {
            console.log(`Error fetching subsirber by ID: ${error.message}`);
            next(error);
        })
    },
    update: (req, res, next) => {
        let courseId = req.params.id;
        let updatesCourse = new Course({
            title: req.body.title,
            description: req.body.description, 
            maxStudent: req.body.maxStudent,
            cost: req.body.cost
        });

        Course.findByIdAndUpdate(courseId, updatesCourse)
        .then(course => {
            res.locals.course = course;
            res.local.redirect = `/courses/${Course._id}`;
            next();
        })
        .catch(eror => {
            console.log(`Error fetching Course by ID: ${error.message}`);
            next(error);
        })
    },
    delete: (req, res, next) => {
        let courseId = req.params.id;
        Course.findByIdAndRemove(courseId)
        .then(() => {
            res.locals.redirect = `/courses`;
            next();
        })
        .catch(error => {
            console.log(`Error fetching Course by ID: ${error.message}`);
            next(error);
        });
    }
} 