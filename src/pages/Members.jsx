import React from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getMembers, createMember, updateMember, deleteMember ,getMemberById} from '../api/api'
import { DataGrid } from '@mui/x-data-grid'
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'

const Members = () => {
    const [open, setOpen] = React.useState(false)
    const [selectedMember, setSelectedMember] = React.useState(null)
    const queryClient = useQueryClient()

    const { data: members, isLoading } = useQuery('members', getMembers)

    const createMutation = useMutation(createMember, {
        onSuccess: () => {
            queryClient.invalidateQueries('members')
            setOpen(false)
        }
    })

    const updateMutation = useMutation(updateMember, {
        onSuccess: () => {
            queryClient.invalidateQueries('members')
            setOpen(false)
        }
    })

    const deleteMutation = useMutation(deleteMember, {
        onSuccess: () => queryClient.invalidateQueries('members')
    })

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 130 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            renderCell: (params) => (
                <>
                    <Button onClick={() => handleEdit(params.row)}>Edit</Button>
                    <Button onClick={() => handleDelete(params.row.id)} color="error">Delete</Button>
                </>
            )
        }
    ]

    const handleEdit = (member) => {
        setSelectedMember(member)
        setOpen(true)
    }

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this member?')) {
            deleteMutation.mutate(id)
        }
    }

    if (isLoading) return <div>Loading...</div>

    return (
        <div className="p-6">
            <div className="flex justify-between mb-6">
                <h1 className="text-2xl font-bold">Members Management</h1>
                <Button variant="contained" onClick={() => setOpen(true)}>Add Member</Button>
            </div>

            <DataGrid
                rows={members || []}
                columns={columns}
                pageSize={10}
                autoHeight
                className="bg-white rounded-lg shadow"
            />

            <MemberDialog
                open={open}
                onClose={() => {
                    setOpen(false)
                    setSelectedMember(null)
                }}
                member={selectedMember}
                onSubmit={(data) => {
                    if (selectedMember) {
                        updateMutation.mutate({ id: selectedMember.id, ...data })
                    } else {
                        createMutation.mutate(data)
                    }
                }}
            />
        </div>
    )
}

const MemberDialog = ({ open, onClose, member, onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        onSubmit(Object.fromEntries(formData))
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{member ? 'Edit Member' : 'Add Member'}</DialogTitle>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <TextField
                        name="name"
                        label="Name"
                        defaultValue={member?.name}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="email"
                        label="Email"
                        defaultValue={member?.email}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="status"
                        label="Status"
                        defaultValue={member?.status}
                        fullWidth
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button type="submit" variant="contained">Save</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default Members
