# `adminRoleCustomAssignments` Submodule <a name="`adminRoleCustomAssignments` Submodule" id="@cdktf/provider-okta.adminRoleCustomAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdminRoleCustomAssignments <a name="AdminRoleCustomAssignments" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom_assignments okta_admin_role_custom_assignments}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import admin_role_custom_assignments

adminRoleCustomAssignments.AdminRoleCustomAssignments(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_role_id: str,
  resource_set_id: str,
  id: str = None,
  members: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.customRoleId">custom_role_id</a></code> | <code>str</code> | ID of the Custom Role. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.resourceSetId">resource_set_id</a></code> | <code>str</code> | ID of the target Resource Set. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom_assignments#id AdminRoleCustomAssignments#id}. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.members">members</a></code> | <code>typing.List[str]</code> | The hrefs that point to User(s) and/or Group(s) that receive the Role. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_role_id`<sup>Required</sup> <a name="custom_role_id" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.customRoleId"></a>

- *Type:* str

ID of the Custom Role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom_assignments#custom_role_id AdminRoleCustomAssignments#custom_role_id}

---

##### `resource_set_id`<sup>Required</sup> <a name="resource_set_id" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.resourceSetId"></a>

- *Type:* str

ID of the target Resource Set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom_assignments#resource_set_id AdminRoleCustomAssignments#resource_set_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom_assignments#id AdminRoleCustomAssignments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.members"></a>

- *Type:* typing.List[str]

The hrefs that point to User(s) and/or Group(s) that receive the Role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom_assignments#members AdminRoleCustomAssignments#members}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.resetMembers">reset_members</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_members` <a name="reset_members" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.resetMembers"></a>

```python
def reset_members() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import admin_role_custom_assignments

adminRoleCustomAssignments.AdminRoleCustomAssignments.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import admin_role_custom_assignments

adminRoleCustomAssignments.AdminRoleCustomAssignments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import admin_role_custom_assignments

adminRoleCustomAssignments.AdminRoleCustomAssignments.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.customRoleIdInput">custom_role_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.resourceSetIdInput">resource_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.customRoleId">custom_role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.resourceSetId">resource_set_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_role_id_input`<sup>Optional</sup> <a name="custom_role_id_input" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.customRoleIdInput"></a>

```python
custom_role_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_set_id_input`<sup>Optional</sup> <a name="resource_set_id_input" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.resourceSetIdInput"></a>

```python
resource_set_id_input: str
```

- *Type:* str

---

##### `custom_role_id`<sup>Required</sup> <a name="custom_role_id" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.customRoleId"></a>

```python
custom_role_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_set_id`<sup>Required</sup> <a name="resource_set_id" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.resourceSetId"></a>

```python
resource_set_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AdminRoleCustomAssignmentsConfig <a name="AdminRoleCustomAssignmentsConfig" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import admin_role_custom_assignments

adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_role_id: str,
  resource_set_id: str,
  id: str = None,
  members: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.customRoleId">custom_role_id</a></code> | <code>str</code> | ID of the Custom Role. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.resourceSetId">resource_set_id</a></code> | <code>str</code> | ID of the target Resource Set. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom_assignments#id AdminRoleCustomAssignments#id}. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.members">members</a></code> | <code>typing.List[str]</code> | The hrefs that point to User(s) and/or Group(s) that receive the Role. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_role_id`<sup>Required</sup> <a name="custom_role_id" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.customRoleId"></a>

```python
custom_role_id: str
```

- *Type:* str

ID of the Custom Role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom_assignments#custom_role_id AdminRoleCustomAssignments#custom_role_id}

---

##### `resource_set_id`<sup>Required</sup> <a name="resource_set_id" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.resourceSetId"></a>

```python
resource_set_id: str
```

- *Type:* str

ID of the target Resource Set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom_assignments#resource_set_id AdminRoleCustomAssignments#resource_set_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom_assignments#id AdminRoleCustomAssignments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

The hrefs that point to User(s) and/or Group(s) that receive the Role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom_assignments#members AdminRoleCustomAssignments#members}

---


