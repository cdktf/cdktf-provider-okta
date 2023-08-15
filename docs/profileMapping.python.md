# `okta_profile_mapping`

Refer to the Terraform Registory for docs: [`okta_profile_mapping`](https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/profile_mapping).

# `profileMapping` Submodule <a name="`profileMapping` Submodule" id="@cdktf/provider-okta.profileMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProfileMapping <a name="ProfileMapping" id="@cdktf/provider-okta.profileMapping.ProfileMapping"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/profile_mapping okta_profile_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import profile_mapping

profileMapping.ProfileMapping(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  source_id: str,
  target_id: str,
  always_apply: typing.Union[bool, IResolvable] = None,
  delete_when_absent: typing.Union[bool, IResolvable] = None,
  id: str = None,
  mappings: typing.Union[IResolvable, typing.List[ProfileMappingMappings]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.sourceId">source_id</a></code> | <code>str</code> | The source id of the mapping to manage. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.targetId">target_id</a></code> | <code>str</code> | The target id of the mapping to manage. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.alwaysApply">always_apply</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether apply the changes to all users with this profile after updating or creating the these mappings. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.deleteWhenAbsent">delete_when_absent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When turned on this flag will trigger the provider to delete mapping properties that are not defined in config. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/profile_mapping#id ProfileMapping#id}. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.mappings">mappings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>]]</code> | mappings block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.sourceId"></a>

- *Type:* str

The source id of the mapping to manage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/profile_mapping#source_id ProfileMapping#source_id}

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.targetId"></a>

- *Type:* str

The target id of the mapping to manage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/profile_mapping#target_id ProfileMapping#target_id}

---

##### `always_apply`<sup>Optional</sup> <a name="always_apply" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.alwaysApply"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether apply the changes to all users with this profile after updating or creating the these mappings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/profile_mapping#always_apply ProfileMapping#always_apply}

---

##### `delete_when_absent`<sup>Optional</sup> <a name="delete_when_absent" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.deleteWhenAbsent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When turned on this flag will trigger the provider to delete mapping properties that are not defined in config.

By default, we do not delete missing properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/profile_mapping#delete_when_absent ProfileMapping#delete_when_absent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/profile_mapping#id ProfileMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mappings`<sup>Optional</sup> <a name="mappings" id="@cdktf/provider-okta.profileMapping.ProfileMapping.Initializer.parameter.mappings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>]]

mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/profile_mapping#mappings ProfileMapping#mappings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.putMappings">put_mappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.resetAlwaysApply">reset_always_apply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.resetDeleteWhenAbsent">reset_delete_when_absent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.resetMappings">reset_mappings</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.profileMapping.ProfileMapping.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.profileMapping.ProfileMapping.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.profileMapping.ProfileMapping.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.profileMapping.ProfileMapping.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.profileMapping.ProfileMapping.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.profileMapping.ProfileMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.profileMapping.ProfileMapping.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.profileMapping.ProfileMapping.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.profileMapping.ProfileMapping.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_mappings` <a name="put_mappings" id="@cdktf/provider-okta.profileMapping.ProfileMapping.putMappings"></a>

```python
def put_mappings(
  value: typing.Union[IResolvable, typing.List[ProfileMappingMappings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.profileMapping.ProfileMapping.putMappings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>]]

---

##### `reset_always_apply` <a name="reset_always_apply" id="@cdktf/provider-okta.profileMapping.ProfileMapping.resetAlwaysApply"></a>

```python
def reset_always_apply() -> None
```

##### `reset_delete_when_absent` <a name="reset_delete_when_absent" id="@cdktf/provider-okta.profileMapping.ProfileMapping.resetDeleteWhenAbsent"></a>

```python
def reset_delete_when_absent() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.profileMapping.ProfileMapping.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mappings` <a name="reset_mappings" id="@cdktf/provider-okta.profileMapping.ProfileMapping.resetMappings"></a>

```python
def reset_mappings() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.profileMapping.ProfileMapping.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import profile_mapping

profileMapping.ProfileMapping.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.profileMapping.ProfileMapping.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.profileMapping.ProfileMapping.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import profile_mapping

profileMapping.ProfileMapping.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.profileMapping.ProfileMapping.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.profileMapping.ProfileMapping.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import profile_mapping

profileMapping.ProfileMapping.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.profileMapping.ProfileMapping.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.mappings">mappings</a></code> | <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList">ProfileMappingMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceName">source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetName">target_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetType">target_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.alwaysApplyInput">always_apply_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.deleteWhenAbsentInput">delete_when_absent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.mappingsInput">mappings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceIdInput">source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.alwaysApply">always_apply</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.deleteWhenAbsent">delete_when_absent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceId">source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.mappings"></a>

```python
mappings: ProfileMappingMappingsList
```

- *Type:* <a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList">ProfileMappingMappingsList</a>

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `target_name`<sup>Required</sup> <a name="target_name" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetName"></a>

```python
target_name: str
```

- *Type:* str

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

---

##### `always_apply_input`<sup>Optional</sup> <a name="always_apply_input" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.alwaysApplyInput"></a>

```python
always_apply_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_when_absent_input`<sup>Optional</sup> <a name="delete_when_absent_input" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.deleteWhenAbsentInput"></a>

```python
delete_when_absent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mappings_input`<sup>Optional</sup> <a name="mappings_input" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.mappingsInput"></a>

```python
mappings_input: typing.Union[IResolvable, typing.List[ProfileMappingMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>]]

---

##### `source_id_input`<sup>Optional</sup> <a name="source_id_input" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceIdInput"></a>

```python
source_id_input: str
```

- *Type:* str

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `always_apply`<sup>Required</sup> <a name="always_apply" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.alwaysApply"></a>

```python
always_apply: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_when_absent`<sup>Required</sup> <a name="delete_when_absent" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.deleteWhenAbsent"></a>

```python
delete_when_absent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMapping.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.profileMapping.ProfileMapping.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProfileMappingConfig <a name="ProfileMappingConfig" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import profile_mapping

profileMapping.ProfileMappingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  source_id: str,
  target_id: str,
  always_apply: typing.Union[bool, IResolvable] = None,
  delete_when_absent: typing.Union[bool, IResolvable] = None,
  id: str = None,
  mappings: typing.Union[IResolvable, typing.List[ProfileMappingMappings]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.sourceId">source_id</a></code> | <code>str</code> | The source id of the mapping to manage. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.targetId">target_id</a></code> | <code>str</code> | The target id of the mapping to manage. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.alwaysApply">always_apply</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether apply the changes to all users with this profile after updating or creating the these mappings. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.deleteWhenAbsent">delete_when_absent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When turned on this flag will trigger the provider to delete mapping properties that are not defined in config. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/profile_mapping#id ProfileMapping#id}. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.mappings">mappings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>]]</code> | mappings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

The source id of the mapping to manage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/profile_mapping#source_id ProfileMapping#source_id}

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

The target id of the mapping to manage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/profile_mapping#target_id ProfileMapping#target_id}

---

##### `always_apply`<sup>Optional</sup> <a name="always_apply" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.alwaysApply"></a>

```python
always_apply: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether apply the changes to all users with this profile after updating or creating the these mappings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/profile_mapping#always_apply ProfileMapping#always_apply}

---

##### `delete_when_absent`<sup>Optional</sup> <a name="delete_when_absent" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.deleteWhenAbsent"></a>

```python
delete_when_absent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When turned on this flag will trigger the provider to delete mapping properties that are not defined in config.

By default, we do not delete missing properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/profile_mapping#delete_when_absent ProfileMapping#delete_when_absent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/profile_mapping#id ProfileMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mappings`<sup>Optional</sup> <a name="mappings" id="@cdktf/provider-okta.profileMapping.ProfileMappingConfig.property.mappings"></a>

```python
mappings: typing.Union[IResolvable, typing.List[ProfileMappingMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>]]

mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/profile_mapping#mappings ProfileMapping#mappings}

---

### ProfileMappingMappings <a name="ProfileMappingMappings" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappings.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import profile_mapping

profileMapping.ProfileMappingMappings(
  expression: str,
  id: str,
  push_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/profile_mapping#expression ProfileMapping#expression}. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings.property.id">id</a></code> | <code>str</code> | The mapping property key. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings.property.pushStatus">push_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/profile_mapping#push_status ProfileMapping#push_status}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappings.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/profile_mapping#expression ProfileMapping#expression}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappings.property.id"></a>

```python
id: str
```

- *Type:* str

The mapping property key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/profile_mapping#id ProfileMapping#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `push_status`<sup>Optional</sup> <a name="push_status" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappings.property.pushStatus"></a>

```python
push_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/profile_mapping#push_status ProfileMapping#push_status}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProfileMappingMappingsList <a name="ProfileMappingMappingsList" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import profile_mapping

profileMapping.ProfileMappingMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProfileMappingMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ProfileMappingMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>]]

---


### ProfileMappingMappingsOutputReference <a name="ProfileMappingMappingsOutputReference" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import profile_mapping

profileMapping.ProfileMappingMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.resetPushStatus">reset_push_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_push_status` <a name="reset_push_status" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.resetPushStatus"></a>

```python
def reset_push_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.pushStatusInput">push_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.pushStatus">push_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `push_status_input`<sup>Optional</sup> <a name="push_status_input" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.pushStatusInput"></a>

```python
push_status_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `push_status`<sup>Required</sup> <a name="push_status" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.pushStatus"></a>

```python
push_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.profileMapping.ProfileMappingMappingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ProfileMappingMappings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.profileMapping.ProfileMappingMappings">ProfileMappingMappings</a>]

---



