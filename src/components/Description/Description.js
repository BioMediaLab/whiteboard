import React from 'react'
import Card from 'components/Card'
import TextField from 'components/TextField'

export default ({
    title = '',
    description = '',
    onUpdateTitle,
    onUpdateDescription,
  }) => {

    return (
        <Card>
            <Card.Section title="Title">
                <TextField
                    label="Title"
                    id="title"
                    name="title"
                    value={title}
                    onChange={onUpdateTitle}
                />
                <TextField
                    label="Decsription"
                    id="description"
                    name="description"
                    value={description}
                    onChange={onUpdateDescription}
                />
            </Card.Section>
        </Card>
    )
}