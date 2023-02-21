# `signonPolicy` Submodule <a name="`signonPolicy` Submodule" id="@cdktf/provider-okta.signonPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignonPolicy <a name="SignonPolicy" id="@cdktf/provider-okta.signonPolicy.SignonPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/signon_policy okta_signon_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import signon_policy

signonPolicy.SignonPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  description: str = None,
  groups_included: typing.List[str] = None,
  id: str = None,
  priority: typing.Union[int, float] = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Policy Name. |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | Policy Description. |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.groupsIncluded">groups_included</a></code> | <code>typing.List[str]</code> | List of Group IDs to Include. |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy#id SignonPolicy#id}. |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Policy Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.status">status</a></code> | <code>str</code> | Policy Status: ACTIVE or INACTIVE. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.name"></a>

- *Type:* str

Policy Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy#name SignonPolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.description"></a>

- *Type:* str

Policy Description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy#description SignonPolicy#description}

---

##### `groups_included`<sup>Optional</sup> <a name="groups_included" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.groupsIncluded"></a>

- *Type:* typing.List[str]

List of Group IDs to Include.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy#groups_included SignonPolicy#groups_included}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy#id SignonPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Policy Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy#priority SignonPolicy#priority}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.Initializer.parameter.status"></a>

- *Type:* str

Policy Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy#status SignonPolicy#status}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.resetGroupsIncluded">reset_groups_included</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_groups_included` <a name="reset_groups_included" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.resetGroupsIncluded"></a>

```python
def reset_groups_included() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import signon_policy

signonPolicy.SignonPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import signon_policy

signonPolicy.SignonPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import signon_policy

signonPolicy.SignonPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.groupsIncludedInput">groups_included_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.groupsIncluded">groups_included</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `groups_included_input`<sup>Optional</sup> <a name="groups_included_input" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.groupsIncludedInput"></a>

```python
groups_included_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `groups_included`<sup>Required</sup> <a name="groups_included" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.groupsIncluded"></a>

```python
groups_included: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.signonPolicy.SignonPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SignonPolicyConfig <a name="SignonPolicyConfig" id="@cdktf/provider-okta.signonPolicy.SignonPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import signon_policy

signonPolicy.SignonPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  description: str = None,
  groups_included: typing.List[str] = None,
  id: str = None,
  priority: typing.Union[int, float] = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.name">name</a></code> | <code>str</code> | Policy Name. |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.description">description</a></code> | <code>str</code> | Policy Description. |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.groupsIncluded">groups_included</a></code> | <code>typing.List[str]</code> | List of Group IDs to Include. |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy#id SignonPolicy#id}. |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Policy Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.status">status</a></code> | <code>str</code> | Policy Status: ACTIVE or INACTIVE. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Policy Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy#name SignonPolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Policy Description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy#description SignonPolicy#description}

---

##### `groups_included`<sup>Optional</sup> <a name="groups_included" id="@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.groupsIncluded"></a>

```python
groups_included: typing.List[str]
```

- *Type:* typing.List[str]

List of Group IDs to Include.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy#groups_included SignonPolicy#groups_included}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy#id SignonPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Policy Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy#priority SignonPolicy#priority}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.signonPolicy.SignonPolicyConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Policy Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/signon_policy#status SignonPolicy#status}

---



